import playerRoutes from "./player/getAll";
import roomRoutes from "./room/getRoomDetails";
import { Router } from "express";
import chalk from 'chalk'
const router = Router();

router.get("/players",playerRoutes);
router.get("/room/:room", roomRoutes);

export default router;
