import { query, Request, Response } from 'express';

export function get(req: Request, res: Response) {
    res.json({ success: true });
}