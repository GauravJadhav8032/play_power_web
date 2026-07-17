import { Router } from "express";
import { mockAmenities } from "../data/mockData";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ data: mockAmenities });
});

export default router;
