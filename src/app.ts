import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json());

app.use("/tasks", taskRoutes);

export default app;
