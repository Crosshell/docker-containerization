import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export function createTask(data: Omit<Task, 'id'>): Promise<Task> {
    return prisma.task.create({ data });
}

export function getTask(id: string): Promise<Task | null> {
    return prisma.task.findUnique({ where: { id } });
}

export function getAllTasks(): Promise<Task[]> {
    return prisma.task.findMany();
}

export function updateTask(id: string, data: Partial<Omit<Task, 'id'>>): Promise<Task> {
    return prisma.task.update({
        where: { id },
        data
    });
}

export function deleteTask(id: string): Promise<Task> {
    return prisma.task.delete({
        where: { id }
    });
}
