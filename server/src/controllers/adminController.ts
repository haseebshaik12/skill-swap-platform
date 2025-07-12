import { Request, Response } from 'express';

export async function getAllUsers(req: Request, res: Response) {
  // TODO: Implement get all users (admin)
  res.status(200).json({ users: [] });
}

export async function banUser(req: Request, res: Response) {
  // TODO: Implement ban user
  res.status(200).json({ message: 'User banned (mock)' });
}

export async function getReports(req: Request, res: Response) {
  // TODO: Implement get reports
  res.status(200).json({ reports: [] });
}

export async function sendAnnouncement(req: Request, res: Response) {
  // TODO: Implement send announcement
  res.status(201).json({ message: 'Announcement sent (mock)' });
} 