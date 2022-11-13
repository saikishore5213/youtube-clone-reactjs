import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fontSize } from "@mui/system";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography
        fontSize="25px"
        marginBottom="30px"
        fontWeight="bold"
        variant="body4"
        sx={{ color: "white" }}
      >
        Search results for :{" "}
        <span style={{ color: "#F31503", fontSize: "40px" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
