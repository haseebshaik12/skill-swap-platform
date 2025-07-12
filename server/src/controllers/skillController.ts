import { Request, Response } from 'express';

export async function getSkills(req: Request, res: Response) {
  // TODO: Implement get all skills
  res.status(200).json({ skills: [] });
}

export async function addSkill(req: Request, res: Response) {
  // TODO: Implement add skill
  res.status(201).json({ message: 'Skill added (mock)' });
}

export async function removeSkill(req: Request, res: Response) {
  // TODO: Implement remove skill
  res.status(200).json({ message: 'Skill removed (mock)' });
} 