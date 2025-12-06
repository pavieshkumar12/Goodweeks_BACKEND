import { searchHotels } from "../services/hotelService.js";

export const search = async (req, res, next) => {
  try {
    const { city, check_in, check_out } = req.query;

    if (!city || !check_in || !check_out) {
      return res.status(400).json({
        error: "city, check_in, check_out are required fields",
      });
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const offset = (page - 1) * limit;
    const result = await searchHotels(city, check_in, check_out, limit, offset);
    res.json({
      success: true,
      data: result.rows,
      total: result.count,
      page,
      totalPages: Math.ceil(result.count / limit)
    });

  } catch (err) {
    next(err)
  }
};
