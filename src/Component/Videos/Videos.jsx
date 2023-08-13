import { useParams } from "react-router-dom";
import "./Videos.css";
import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Videos = () => {
  const { video_Id } = useParams();
  const [video, setVideo] = useState([]);
  const [comment, setComment] = useState([]);
  const [product, setProduct] = useState([]);

  const getVideoDetail = async () => {
    const response = await fetch(
      `https://midtermikhroma.ceiera.repl.co/videos/${video_Id}`
    );
    const data = await response.json();
    setVideo(data.data);
  };

  const getComment = async () => {
    const response = await fetch(
      `https://midtermikhroma.ceiera.repl.co/comments?videoId=${video_Id}`
    );
    const data = await response.json();
    setComment(data.data);
  };

  const getProduct = async () => {
    const response = await fetch(
      `https://midtermikhroma.ceiera.repl.co/products?videoId=${video_Id}`
    );
    const data = await response.json();
    setProduct(data.data);
  };

  useEffect(() => {
    getVideoDetail();
    getComment();
    getProduct();
  }, []);

  return (
    <>
      <Grid gridTemplateColumns={'250px 1fr 300px'} gap={6} >
        <GridItem w="100%" h="10" bg="blue.500"></GridItem> 
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      {/* {video.map((item) => {
        return <div key={item._id}>{item.title}</div>;
      })} */}
    </>
  );
};

export default Videos;
