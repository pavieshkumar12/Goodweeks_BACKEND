import { Hotel } from "../models/hotelModel.js";
import { Markup } from "../models/markupModel.js";
import { Op } from "sequelize";

export const searchHotels = async (city, checkIn, checkOut, limit, offset) => {
  // Find hotels with pagination
  const hotelsResult = await Hotel.findAndCountAll({
    where: {
      city,
      available_from: { [Op.lte]: checkIn },
      available_to: { [Op.gte]: checkOut }
    },
    limit,
    offset
  });
  if (!hotelsResult.rows.length) return { rows: [], count: 0 };

  // Get markup by city
  const markupData = await Markup.findOne({ where: { city } });
  const markup = markupData ? markupData.markup : 5; // default 5%

  // Calculate final price for paginated results
  return {
    rows: hotelsResult.rows.map(h => ({
      id: h.id,
      name: h.name,
      rating: h.rating,
      city: h.city,
      base_price: h.base_price,
      check_in: checkIn,
      check_out: checkOut,
      final_price: h.base_price + (h.base_price * markup) / 100
    })),
    count: hotelsResult.count
  };
};