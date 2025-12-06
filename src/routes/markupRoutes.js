import { Router } from "express";
import {
  addMarkup,
  getMarkups,
  editMarkup,
  deleteMarkupById
} from "../controllers/markupController.js";

const router = Router();

router.post("/createMarkup", addMarkup);
router.get("/showMarkups", getMarkups);
router.put("/updateMarkup/:id", editMarkup);
router.delete("/removeMarkup/:id", deleteMarkupById);

export default router;
