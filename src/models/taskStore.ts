import { Task } from "../types/task";
import { initialTasks } from "./initialTasks";

let tasks: Task[] = [...initialTasks];

/**
 * Хранилище задач и операции над ним
 */
export const taskStore = {
  /** Получить все задачи */
  getAll: () => tasks,

  /**
   * Получить задачу по ID
   *  @param id - Идентификатор задачи
   */
  getById: (id: number) => tasks.find((t) => t.id === id),

  /**
   * Создаёт новую задачу
   * @param {Omit<Task, 'id' | 'createdAt'>} data - Поля задачи без id и даты
   * @returns {Task} Новая созданная задача
   */
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

  /**
   * Обновить существующую задачу
   * @param id - Идентификатор задачи
   * @param updates - Поля для обновления
   */
  update: (id: number, updates: Partial<Task>): Task | null => {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    tasks[idx] = { ...tasks[idx], ...updates };
    return tasks[idx];
  },

  /**
   * Удалить задачу
   * @param id - Идентификатор задачи
   */
  delete: (id: number): boolean => {
    const prevLength = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);
    return tasks.length < prevLength;
  },

  /**
   * Фильтрует задачи по части названия и/или дате создания
   *
   * @param {string} [title] - Подстрока для фильтрации по названию (нечувствительно к регистру)
   * @param {string} [date] - Начало даты создания (в формате ISO), например "2025-07-18"
   * @returns {Task[]} Отфильтрованный массив задач
   */
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
