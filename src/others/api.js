import axios from "axios";
const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: URL,
  params: { maxResults:'50'},
  headers: {
    "X-RapidAPI-Key": "3be0d62f10msh9c59e111baa132bp153f0fjsn99e744984f2d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;

};
