import { Router, Request, Response, NextFunction } from 'express';
import * as taskService from './taskService';

const taskController = Router();

taskController.post('/task', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = req.body;
        const task = await taskService.createTask(data);
        res.status(201).json(task);
    } catch (e) {
        next(e);
    }
});

taskController.get('/task', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (e) {
        next(e);
    }
});

taskController.get('/task/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const task = await taskService.getTask(id);
        res.json(task);
    } catch (e) {
        next(e);
    }
});

taskController.put('/task/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedTask = await taskService.updateTask(id, data);
        res.json(updatedTask);
    } catch (e) {
        next(e);
    }
});

taskController.delete('/task/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await taskService.deleteTask(id);
        res.status(204).send();
    } catch (e) {
        next(e);
    }
});

export default taskController;
