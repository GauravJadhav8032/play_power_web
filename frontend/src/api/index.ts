import axios from "axios";
import type {
  Listing,
  PhotosResponse,
  ReviewsData,
  AmenityCategory,
  BookingData,
  ApiResponse,
} from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getListing = async (): Promise<Listing> => {
  const res = await api.get<ApiResponse<Listing>>("/listing");
  return res.data.data;
};

export const getPhotos = async (): Promise<PhotosResponse> => {
  const res = await api.get<PhotosResponse>("/photos");
  return res.data;
};

export const getReviews = async (): Promise<ReviewsData> => {
  const res = await api.get<ApiResponse<ReviewsData>>("/reviews");
  return res.data.data;
};

export const getAmenities = async (): Promise<AmenityCategory[]> => {
  const res = await api.get<ApiResponse<AmenityCategory[]>>("/amenities");
  return res.data.data;
};

export const getBooking = async (): Promise<BookingData> => {
  const res = await api.get<ApiResponse<BookingData>>("/booking");
  return res.data.data;
};

export default api;
