import { Request, Response } from 'express';

export async function getUsers(req: Request, res: Response) {
  // TODO: Implement get all users
  res.status(200).json({ users: [] });
}

export async function getUser(req: Request, res: Response) {
  // TODO: Implement get user by id
  res.status(200).json({ user: null });
}

export async function updateUser(req: Request, res: Response) {
  // TODO: Implement update user
  res.status(200).json({ message: 'User updated (mock)' });
}

export async function deleteUser(req: Request, res: Response) {
  // TODO: Implement delete user
  res.status(200).json({ message: 'User deleted (mock)' });
} 