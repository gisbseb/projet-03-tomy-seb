import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) return res.status(500).send({ message: "Accès refusé !" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
