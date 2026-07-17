import { Router } from "express";
import { mockReviews } from "../data/mockData";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ data: mockReviews });
});

export default router;
