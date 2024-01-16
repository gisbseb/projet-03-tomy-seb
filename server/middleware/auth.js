import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    // let token = req.header("Authorization");
    const { token } = req.coockies;
    if (!token) return res.status(500).send({ message: "Accès refusé !" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
