import { Request, Response } from 'express';

export async function register(req: Request, res: Response) {
  // TODO: Implement user registration
  res.status(201).json({ message: 'User registered (mock)' });
}

export async function login(req: Request, res: Response) {
  // TODO: Implement user login
  res.status(200).json({ message: 'User logged in (mock)', token: 'mock-jwt-token' });
}

export async function logout(req: Request, res: Response) {
  // TODO: Implement user logout
  res.status(200).json({ message: 'User logged out (mock)' });
} 