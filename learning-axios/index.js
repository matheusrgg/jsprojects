import getToken from './tokenService.js';

async function send() {
  const token = await getToken();
  console.log(token);
}


send();