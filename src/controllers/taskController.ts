import { Request, Response } from "express";
import { taskStore } from "../models/taskStore";

export const getAllTasks = (req: Request, res: Response) => {
  const { title, date } = req.query;
  const result = taskStore.filter(
    title ? String(title) : undefined,
    date ? String(date) : undefined,
  );
  res.json(result);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = taskStore.getById(id);
  task ? res.json(task) : res.sendStatus(404);
};

export const createTask = (req: Request, res: Response) => {
  const task = taskStore.create(req.body);
  res.status(201).json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = taskStore.update(id, req.body);
  task ? res.json(task) : res.sendStatus(404);
};

export const deleteTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ok = taskStore.delete(id);
  ok ? res.sendStatus(204) : res.sendStatus(404);
};
