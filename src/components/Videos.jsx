import React from "react";
import "../styles/videos.css";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ChannelDetails from "./ChannelDetails";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
      }}
      className="video-feed"
    >
      {videos.map((video) => (
        <>
          <Card
            sx={{ maxWidth: 345, borderRadius: "10px", background: "#3d3d3d" }}
            key={video.id.videoId}
          >
            <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              <CardMedia
                sx={{ height: 194 }}
                component="img"
                image={video.snippet.thumbnails.medium.url}
              />
            </Link>
            <CardContent sx={{ color: "white" }}>
              <Typography gutterBottom variant="h5" component="div">
                {video.snippet.title}
              </Typography>
              <Typography variant="body2">
                <Link to={`/channels/${video.snippet.channelId}`}>
                  {video.snippet.channelTitle}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </Box>
  );
};

export default Videos;
