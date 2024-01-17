export const REGEX = {
  email: {
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    err: "Email invalide",
  },
  password: {
    regex: /^.{5,}$/,
    err: "Le mot de passe doit contenir au moins 5 caractères",
  },
  phoneNumber: { regex: /^\d{10}$/, err: "Numéro de téléphone invalide" },
  city: {
    regex: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    err: "Veuillez entrer une ville valide",
  },
  country: {
    regex: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    err: "Veuillez entrer un pays valide",
  },
  birthdate: {
    regex: /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/,
    err: "Format de date de naissance invalide (JJ/MM/AAAA)",
  },
  name: {
    regex: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    err: "Veuillez entrer un nom valide",
  },
};
