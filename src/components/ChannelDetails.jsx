import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [channelDetail, setChannelDetail] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(16,134,156,1) 100%)",
            height: "300px",
          }}
        />
        <ChannelCard margin="-93px auto 0 auto" channelDetail={channelDetail} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="2"
        alignSelf="center"
      >
        <Videos justifyContent="center" videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
