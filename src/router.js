import { Router } from "express";
import mailRouter from "./mailService/mail_route.js";

const router = Router();

router.use('/mail', mailRouter);

export default router;