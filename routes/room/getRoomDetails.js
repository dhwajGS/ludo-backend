import { Router } from "express";
import  roomController  from "../../controllers/room/getOne";

const router = Router();
router.get('/room/:room', roomController.getOne)

export default router;

