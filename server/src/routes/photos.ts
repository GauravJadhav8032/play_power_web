import { Router } from "express";
import { mockPhotos } from "../data/mockData";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ data: mockPhotos, total: mockPhotos.length });
});

export default router;
