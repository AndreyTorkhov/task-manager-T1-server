export const taskCategories = [
  "Bug",
  "Feature",
  "Documentation",
  "Refactor",
  "Test",
] as const;

export const taskStatuses = ["To Do", "In Progress", "Done"] as const;

export const taskPriorities = ["Low", "Medium", "High"] as const;

export type TaskCategory = (typeof taskCategories)[number];
export type TaskStatus = (typeof taskStatuses)[number];
export type TaskPriority = (typeof taskPriorities)[number];

export interface Task {
  id: number;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}
