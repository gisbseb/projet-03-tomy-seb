export const REGEX = {
  email: {
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    err: "Email invalide",
  },
  password: {
    // regex: /^(?=.*[0-9]).{8,}$/,
    regex: /^.+$/,
    err: "Le mot de passe doit contenir au moins 1 chiffre et faire 8 caractères",
  },
  phoneNumber: { regex: /^\d{10}$/, err: "Numéro de téléphone invalide" },
};
