import { Router } from "express";
import hotelRoutes from "./hotelRoutes.js";
import markupRoutes from "./markupRoutes.js";

const router = Router();

router.use("/hotels", hotelRoutes);
router.use("/markups", markupRoutes);

export default router;
