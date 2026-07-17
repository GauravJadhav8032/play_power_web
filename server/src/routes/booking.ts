import { Router } from "express";
import { mockBooking } from "../data/mockData";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ data: mockBooking });
});

export default router;
