import {
  createMarkup,
  listMarkups,
  updateMarkup,
  deleteMarkup
} from "../services/markupService.js";

export const addMarkup = async (req, res,next) => {
  try {
    const result = await createMarkup(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err)
  }
};

export const getMarkups = async (req, res,next) => {
  try {
    const result = await listMarkups();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err)
  }
};

export const editMarkup = async (req, res,next) => {
  try {
    const { id } = req.params;
    await updateMarkup(id, req.body);
    res.json({ success: true, message: "Markup updated" });
  } catch (err) {
    next(err)
  }
};

export const deleteMarkupById = async (req, res,next) => {
  try {
    const { id } = req.params;
    await deleteMarkup(id);
    res.json({ success: true, message: "Markup deleted" });
  } catch (err) {
    next(err)
  }
};
