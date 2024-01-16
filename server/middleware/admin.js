export const isAdmin = async (req, res, next) => {
  const user = req.user; // Supposons que l'utilisateur soit attaché à l'objet de requête dans un middleware précédent

  if (!user && !user.isAdmin) {
    return res.status(403).json({
      message: "Accès interdit. Vous n'avez pas les autorisations nécessaires.",
    });
  }
  next();
};
