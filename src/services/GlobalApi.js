import axios from "axios";

export const searchPlaces = async (keyword, latitude, longitude, radius) => {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
    {
      params: {
        key: process.env.GOOGLE_API_KEY,
        location: `${latitude},${longitude}`,
        radius: radius,
        keyword: keyword,
      },
    }
  );

  return response.data.results;
};

export const getNearbyPlaces = async (
  category,
  latitude,
  longitude,
  radius
) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${category}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.results;
    } else {
      throw new Error(
        "Failed to fetch nearby places: " + response.data.error_message
      );
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch nearby places");
  }
};
