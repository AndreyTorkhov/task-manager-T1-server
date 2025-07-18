import { Task } from "../types/task";
import { initialTasks } from "./initialTasks";

let tasks: Task[] = [...initialTasks];

export const taskStore = {
  getAll: () => tasks,
  getById: (id: number) => tasks.find((t) => t.id === id),
  create: (data: Omit<Task, "id" | "createdAt">): Task => {
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

    const task: Task = {
      ...data,
      id: nextId,
      createdAt: new Date().toISOString(),
    };

    tasks.push(task);
    return task;
  },
  update: (id: number, updates: Partial<Task>): Task | null => {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    tasks[idx] = { ...tasks[idx], ...updates };
    return tasks[idx];
  },
  delete: (id: number): boolean => {
    const prevLength = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);
    return tasks.length < prevLength;
  },
  filter: (title?: string, date?: string): Task[] => {
    return tasks.filter((task) => {
      const matchTitle = title
        ? task.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchDate = date ? task.createdAt.startsWith(date) : true;
      return matchTitle && matchDate;
    });
  },
};
