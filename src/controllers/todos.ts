import { RequestHandler } from "express";
import { Todo } from "../models/todos";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  console.log(text);
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo", createdTodo: newTodo });
};
