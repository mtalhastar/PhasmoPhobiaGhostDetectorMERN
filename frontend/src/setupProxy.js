const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
      ["/evidence","/ghost"],
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    );
};