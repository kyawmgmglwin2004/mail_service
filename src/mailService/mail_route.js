import { Router } from "express";
import mailSenter from "./mail_controller.js";
const mailRouter = Router();

mailRouter.post('/send-mail', mailSenter);

export default mailRouter;