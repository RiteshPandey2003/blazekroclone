import{Router} from "express"
import { postCart } from "../controllers/cartControllers.js";
import { verifyJWT } from "../middleware/authmiddleware.js";

const router = Router();

router.route("/postcart").post(verifyJWT,postCart);
export default router;