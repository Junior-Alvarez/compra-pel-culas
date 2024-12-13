import Express from "express";
import movieRoutes from "./routes/movieRoutes";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = Express();


app.use(cors({
    origin: 'http://localhost:3000',  // Permite solicitudes desde el frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(Express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

export default app;