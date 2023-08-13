import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../others/api";
import Videos from "./Videos";
import { Box, Card, CardMedia } from "@mui/material";
import Logo from "../others/logo192.png";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  console.log(channelDetails, videos);
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  return (
    <div>
      <Card
        sx={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: "180px", borderRadius: "50%", width: "180px" }}
          component="img"
          image={channelDetails.snippet?.thumbnails?.high?.url || Logo}
        />
        <h1 style={{ color: "white" }}>{channelDetails.snippet?.title}</h1>
      </Card>

      <Box sx={{ ml: "60px" }}>
        <Videos videos={videos} />
      </Box>
      <div>als;dak;sd</div>
    </div>
  );
};

export default ChannelDetails;
