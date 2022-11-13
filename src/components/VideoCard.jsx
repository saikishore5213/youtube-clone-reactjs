import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: "320px", xs: "100%" }}>
      <Link to={videoId ? `/video/${videoId}` : "demoVideoUrl"}>
        <CardMedia
          sx={{ width: 358, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : "demoVideoUrl"}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : "demoChannelUrl"
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            <CheckCircle
              sx={{ fontSize: 12, color: "gray", ml: "5px" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;