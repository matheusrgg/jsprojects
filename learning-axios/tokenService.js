import axios from 'axios';

const url = 'https://token-server-dot-bidu-digital-dev.appspot.com/allianz-token';


async function getToken() {
  let token = await axios.get(url).then(function (data) {

    return data.data.access_token;
  });
  return token;

};

export default getToken;