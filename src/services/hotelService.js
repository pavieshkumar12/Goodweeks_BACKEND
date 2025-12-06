import { Hotel } from "../models/hotelModel.js";
import { Markup } from "../models/markupModel.js";
import { Op } from "sequelize";

export const searchHotels = async (city, checkIn, checkOut) => {
  // Find hotels that match city + available date range
  const hotels = await Hotel.findAll({
    where: {
      city,
      available_from: { [Op.lte]: checkIn },
      available_to: { [Op.gte]: checkOut }
    }
  });

  if (!hotels.length) return [];

  // Get markup by city
  const markupData = await Markup.findOne({ where: { city } });
  const markup = markupData ? markupData.markup : 5; // default 5%

  // Calculate final price
  return hotels.map(h => ({
    id: h.id,
    name: h.name,
    rating: h.rating,
    city: h.city,
    base_price: h.base_price,
    check_in: checkIn,
    check_out: checkOut,
    final_price: h.base_price + (h.base_price * markup) / 100
  }));
};

