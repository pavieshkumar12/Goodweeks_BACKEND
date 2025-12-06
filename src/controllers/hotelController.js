import { searchHotels } from "../services/hotelService.js";

export const search = async (req, res,next) => {
  try {
    const { city, check_in, check_out } = req.query;

    if (!city || !check_in || !check_out) {
      return res.status(400).json({
        error: "city, check_in, check_out are required fields",
      });
    }

    const result = await searchHotels(city, check_in, check_out);
    return res.json({ success: true, data: result });

  } catch (err) {
    next(err)
  }
};
