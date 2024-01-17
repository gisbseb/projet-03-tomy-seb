import User from "../models/UserModel.js";

export const isAdmin = async (req, res, next) => {
  const userId = req.userId;

  const user = await User.findById(userId);

  if (!user.isAdmin) {
    return res.status(403).json({
      message: "Accès interdit. Vous n'avez pas les autorisations nécessaires.",
    });
  }

  next();
};
