const verifyJwt = (req, res, next) => {
  console.log("test middleware");

  next();
};

export default verifyJwt;
