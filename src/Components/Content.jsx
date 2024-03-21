import React, { useState } from "react";
import Paginate from "../Components/Pagination";
import {
  Typography,
  Button,
  Card,
  Box,
  CardActions,
  Stack,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Container,
} from "@material-ui/core";
import ReadMore from "./ReadMore";
import Context from "../context";

const Content = () => {
  const data = React.useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / articlesPerPage)) {
      Math.ceil(data.length / articlesPerPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const renderMedia = (article) => {
    return (
      <CardMedia
        component="img"
        height="200"
        image={article.urlToImage}
        title="article"
      />
    );
  };

  const renderElements = () => {
    const indexOfLastPost = currentPage * articlesPerPage;
    const indexOfFirstPost = indexOfLastPost - articlesPerPage;
    let currentPosts = [...data.slice(indexOfFirstPost, indexOfLastPost)];

    return (
      <>
        {currentPosts.map((article, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <>{renderMedia(article)}</>
                <CardContent>
                  <Typography variant="h5">{article?.title}</Typography>
                  <ReadMore text={article?.description} />
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      href={article.url}
                      sx={{ m: 0.5 }}
                    >
                      go to the whole article...
                    </Button>
                  </CardActions>
                  <Typography
                    textAlign="right"
                    sx={{ color: "#e2e2e2", fontSize: 15 }}
                  >
                    {article.publishedAt.slice(0, 10)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </>
    );
  };

  return data ? (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {renderElements()}
        </Grid>
        {data.length > 1 ? (
          <Paginate
            onPageChange={paginate}
            postsPerPage={articlesPerPage}
            totalPosts={data.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        ) : null}
      </Container>
    </Box>
  ) : (
    <Stack alignItems="center">
      <CircularProgress />
    </Stack>
  );
};

export default Content;
