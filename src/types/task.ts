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

/**
 * @typedef {Object} Task
 * @property {string} id - Уникальный идентификатор задачи
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи (опционально)
 * @property {'Test'|'Bug'|'Feature'|'Documentation'|'Refactor'} category - Категория задачи
 * @property {'To Do'|'In Progress'|'Done'} status - Статус задачи
 * @property {'Low'|'Medium'|'High'} priority - Приоритет задачи
 * @property {string} createdAt - Дата создания в ISO формате
 */
export interface Task {
  id: number;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}
