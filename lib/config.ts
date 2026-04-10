// External app URLs
export const APP_URLS = {
  TASK_MANAGER: process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3001',
  TASK_MANAGER_LOGIN: (process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3001') + '/login',
  TASK_MANAGER_SIGNUP: (process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3001') + '/register',
  TASK_MANAGER_DASHBOARD: (process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3001') + '/dashboard',
};
