import { Router } from "express";
import { mockListing } from "../data/mockData";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ data: mockListing });
});

export default router;
