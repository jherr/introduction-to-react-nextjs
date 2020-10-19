const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/introduction-to-react-nextjs" : "",
  assetPrefix: !debug ? "/introduction-to-react-nextjs/" : "",
};
