import { Request, Response } from "express";
import { articleService } from "../services/article.service";

export const articleController = {
  async create(req: Request, res: Response) {
    try {
      const result = await articleService.create(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err: any) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await articleService.update(id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err: any) {
      res.status(404).json({ success: false, message: err.message });
    }
  },

  async getAll(req: Request, res: Response) {
    const data = await articleService.getAll();
    res.status(200).json({ success: true, data });
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await articleService.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err: any) {
      res.status(404).json({ success: false, message: err.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await articleService.delete(id);
      res.status(200).json({ success: true, message: "Article deleted" });
    } catch (err: any) {
      res.status(404).json({ success: false, message: err.message });
    }
  },
};
