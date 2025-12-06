import { Markup } from "../models/markupModel.js";

export const createMarkup = (data) => Markup.create(data);
export const listMarkups = () => Markup.findAll();
export const updateMarkup = (id, data) =>
  Markup.update(data, { where: { id } });
export const deleteMarkup = (id) => Markup.destroy({ where: { id } });
