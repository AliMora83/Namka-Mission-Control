// GitHub API Integration for Master.md Data Fetching
// Phase 1: Replace Firestore with GitHub API

interface Project {
  id: string;
  name: string;
  repo: string;
  stack: string;
  status: string;
  lastCommit: string;
  nextStep: string;
  aiModel: string;
  notes?: string;
  blocker?: string;
  priority: string;
}

interface ReviewEntry {
  date: string;
  agent: string;
  status: string;
  project: string;
  topic: string;
  analysis: string;
  recommendations: string;
}

const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER = 'AliMora83';
const REPO_NAME = 'Namka-Mission-Control';
const MASTER_MD_PATH = 'Master.md';

/**
 * Fetch Master.md content from GitHub
 */
export async function fetchMasterMd(): Promise<string> {
  const url = `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${MASTER_MD_PATH}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Decode base64 content
    const content = atob(data.content);
    return content;
  } catch (error) {
    console.error('Error fetching Master.md:', error);
    throw error;
  }
}

/**
 * Parse Master.md markdown to extract projects
 */
export function parseProjects(markdown: string): Project[] {
  const projects: Project[] = [];
  const lines = markdown.split('\n');
  
  let currentProject: Partial<Project> = {};
  let inProject = false;
  let projectCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect project headings (#### 1. Project Name)
    if (line.match(/^####\s+\d+\.\s+(.+)/)) {
      if (inProject && currentProject.name) {
        projects.push(currentProject as Project);
      }
      
      projectCount++;
      const name = line.match(/^####\s+\d+\.\s+(.+)/)?.[1] || '';
      currentProject = {
        id: `project-${projectCount}`,
        name,
        priority: 'normal',
      };
      inProject = true;
      continue;
    }
    
    if (inProject) {
      // Extract project details
      if (line.includes('**Repo:**')) {
        currentProject.repo = line.split('**Repo:**')[1]?.trim() || '';
      } else if (line.includes('**Stack:**')) {
        currentProject.stack = line.split('**Stack:**')[1]?.trim() || '';
      } else if (line.includes('**Status:**')) {
        currentProject.status = line.split('**Status:**')[1]?.trim() || '';
        // Extract last commit date if present
        const commitMatch = line.match(/Last commit:\s*([\d-]+)/);
        if (commitMatch) {
          currentProject.lastCommit = commitMatch[1];
        }
      } else if (line.includes('**Next Step:**')) {
        currentProject.nextStep = line.split('**Next Step:**')[1]?.trim() || '';
      } else if (line.includes('**AI Model:**')) {
        currentProject.aiModel = line.split('**AI Model:**')[1]?.trim() || '';
      } else if (line.includes('**Notes:**')) {
        currentProject.notes = line.split('**Notes:**')[1]?.trim() || '';
      } else if (line.includes('**Blocker:**')) {
        currentProject.blocker = line.split('**Blocker:**')[1]?.trim() || '';
      }
      
      // Detect priority
      if (line.includes('Priority 1')) {
        currentProject.priority = 'high';
      } else if (line.includes('Priority 2')) {
        currentProject.priority = 'medium';
      }
      
      // End of project section
      if (line.startsWith('####') && !line.match(/^####\s+\d+\./)) {
        if (currentProject.name) {
          projects.push(currentProject as Project);
        }
        currentProject = {};
        inProject = false;
      }
    }
  }
  
  // Add last project
  if (inProject && currentProject.name) {
    projects.push(currentProject as Project);
  }
  
  return projects;
}

/**
 * Parse Master.md markdown to extract review entries
 */
export function parseReviews(markdown: string): ReviewEntry[] {
  const reviews: ReviewEntry[] = [];
  const lines = markdown.split('\n');
  
  let currentReview: Partial<ReviewEntry> = {};
  let inReview = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect review entry headers
    if (line.includes('## 📋 Review Entry')) {
      if (inReview && currentReview.date) {
        reviews.push(currentReview as ReviewEntry);
      }
      
      currentReview = {};
      inReview = true;
      continue;
    }
    
    if (inReview) {
      // Extract review details
      if (line.includes('**Date**:')) {
        currentReview.date = line.split('**Date**:')[1]?.trim() || '';
      } else if (line.includes('**Agent**:')) {
        currentReview.agent = line.split('**Agent**:')[1]?.trim() || '';
      } else if (line.includes('**Status**:')) {
        currentReview.status = line.split('**Status**:')[1]?.trim() || '';
      } else if (line.includes('**Project**:')) {
        currentReview.project = line.split('**Project**:')[1]?.trim() || '';
      } else if (line.includes('**Topic**:')) {
        currentReview.topic = line.split('**Topic**:')[1]?.trim() || '';
      }
      
      // End of review section
      if (line.startsWith('---') && currentReview.date) {
        reviews.push(currentReview as ReviewEntry);
        currentReview = {};
        inReview = false;
      }
    }
  }
  
  return reviews;
}

/**
 * Get all projects from Master.md
 */
export async function getAllProjects(): Promise<Project[]> {
  const markdown = await fetchMasterMd();
  return parseProjects(markdown);
}

/**
 * Get all review entries from Master.md
 */
export async function getAllReviews(): Promise<ReviewEntry[]> {
  const markdown = await fetchMasterMd();
  return parseReviews(markdown);
}
