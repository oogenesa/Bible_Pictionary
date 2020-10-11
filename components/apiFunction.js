import axios from 'axios';

export const quiz = (send) => {
  let url =
    'http://www.musikantara.com/api/quiz/' +
    'level=' +
    send.level +
    '&keyword=' +
    send.keyword;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const question = (send) => {
  let url = 'http://www.musikantara.com/api/quiz/' + 'id=' + send.id;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const info = (send) => {
  let url = 'http://www.musikantara.com/api/info/' + 'keyword=' + send.keyword;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const infodetail = (send) => {
  let url = 'http://www.musikantara.com/api/info/' + 'id=' + send.id;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
