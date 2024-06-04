import axios from "axios";

const API_KEY = "jMLRlPQIC_59bhmg028c4tdNCYGkjFnuZ8uWip1qjpk";
axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImage(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      page,
      per_page: 12,
      query: JSON.stringify(query),
    },
  });

  return response.data.results;
}
