import express from "express";
import cors from "cors";
import listingRouter from "./routes/listing";
import photosRouter from "./routes/photos";
import reviewsRouter from "./routes/reviews";
import amenitiesRouter from "./routes/amenities";
import bookingRouter from "./routes/booking";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/listing", listingRouter);
app.use("/api/photos", photosRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/amenities", amenitiesRouter);
app.use("/api/booking", bookingRouter);

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
