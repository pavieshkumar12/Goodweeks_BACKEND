import { Markup } from "../models/markupModel.js";

export const createMarkup = (data) => Markup.create(data);
export const listMarkups = (limit = 20, offset = 0) => Markup.findAll({ limit, offset });
export const updateMarkup = (id, data) =>
  Markup.update(data, { where: { id } });
export const deleteMarkup = (id) => Markup.destroy({ where: { id } });
