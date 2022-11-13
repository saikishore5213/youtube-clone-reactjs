import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop, margin }) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { sx: "356px", md: "320px" },
        margin,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}` || demoChannelUrl}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "##fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" color="gray">
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: 14, color: "gray", ml: "5px" }}
            ></CheckCircle>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography color="gray">
              {parseInt(
                channelDetail?.statistics.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
