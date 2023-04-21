import axios from "axios";

export const fetchTours = async () => {
  const res = await axios.get("https://course-api.com/react-tours-project");
  return res.data;
};
