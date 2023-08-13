import { useCallback, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ListVideos = () => {
  const [ListVideoss, setListVideoss] = useState([""]);
  const getVideos = async (page = 1) => {
    const response = await fetch(
      "https://midtermikhroma.ceiera.repl.co/videos"
    );
    const data = await response.json().then(data => {
        setListVideoss(data.data);
    });
    
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (ListVideoss[0] === "") {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <Flex flexWrap="wrap" overflowY={"hide"} maxH={"550px"} _hover={{overflowY: "scroll"}}>
      {ListVideoss.map((videos) => {
        return (
          <Link key={videos._id} to={`/videos/${videos._id}`}>
            <Card w="300px">
              <CardBody>
                <Image
                  src={videos.videoUrlThumbnail[0]}
                  alt="thumbnail"
                  borderRadius="lg"
                />
                <Heading size="sm">{videos.title}</Heading>
              </CardBody>
            </Card>
          </Link>
        );
      })}
    </Flex>
  );
};

export default ListVideos;
