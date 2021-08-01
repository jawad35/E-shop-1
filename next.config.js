module.exports = {
  publicRuntimeConfig: /*{
    NODE_ENV= proces.env.NODE_ENV,
    backend: process.env.API_URL
    mapboxtoken: process.env.MAP_BOX_API,
  }*/ {
    NODE_ENV: 'development',
    backend: 'http://localhost:5000/api',
  },
};
