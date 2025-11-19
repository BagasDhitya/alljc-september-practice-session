import { Router } from "express";
import { articleController } from "../controllers/article.controller";

const router = Router();

router.post("/", articleController.create);
router.get("/", articleController.getAll);
router.get("/:id", articleController.getById);
router.put("/:id", articleController.update);
router.delete("/:id", articleController.delete);

export default router;
