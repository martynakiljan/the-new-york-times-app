/** @format */

const getArticlesFromAPI = async () => {
  const API_URL_NEWS = `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`;

  return await fetch(API_URL_NEWS)
    .then((res) => res.json())
    .then((res) => {
      return res.articles;
    })
    .catch((error) => console.warn(error));
};

export default getArticlesFromAPI;
