import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { fetchApi } from "../others/api";
import Videos from "./Videos";
const SearchFeed = () => {
  const {query} = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${query}`).then((data) =>
      setVideos(data.items)
    );
  }, [query]);

  return (
    <Box sx={{ flexDirection: { sx: "column", md: "row" } }} p={2}>
      <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", paddingLeft:'20px' }}>
        Search Results for : <span style={{ color: "red" }}>{query} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
