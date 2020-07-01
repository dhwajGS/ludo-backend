import { Router } from "express";
import playerController from "../../controllers/player/getAll";

const router = Router();
router.get("/players", playerController.getAll);

export default router;
