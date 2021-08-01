import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const validateToken = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('authorization', 'Bearer ' + token);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: null,
    redirect: 'follow',
  };

  const response = await fetch(
    `${publicRuntimeConfig.backend}/users/validateToken`,
    requestOptions
  );

  return response;
};
export const login = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    email,
    password,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    `${publicRuntimeConfig.backend}/users/login`,
    requestOptions
  );

  return response;
};

export const signUp = async (name, email, userName, password) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    name,
    email,
    userName,
    password,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    `${publicRuntimeConfig.backend}/users/signup`,
    requestOptions
  );

  return response;
};
