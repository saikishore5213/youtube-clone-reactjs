import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Videos from "./Videos";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchFromAPI(`videos?part=sinppet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading....";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction="row" sx={{ xs: "column", md: "row" }}>
        <Box flex={1} p={3}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="gray">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px">
                <Typography variant="body1" color="gray">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color="gray">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box pr={1} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
