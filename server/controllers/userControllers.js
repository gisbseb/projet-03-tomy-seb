import express from "express";
import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  if (!!id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      return res.json({ user: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la recherche de l'utilisateur" });
    }
  } else {
    const allUsers = await User.find({}, "-password");
    const x = Math.floor(Math.random() * allUsers.length);
    return res.status(200).json({ user: allUsers[x] });
  }
};

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "La récupération des utilisateurs à échoué, veuillez réessayez",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

export const register = async (req, res, next) => {
  const {
    id,
    gender,
    firstname,
    lastname,
    email,
    password,
    phone,
    birthdate,
    city,
    country,
    photo,
    Category,
    isAdmin,
  } = req.body;

  let existingUser = await User.findOne({ email: email });
  console.log(existingUser);
  if (existingUser) {
    return res.status(400).json({ err: "Cet Email est déja utilisé" });
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    id,
    gender,
    firstname,
    lastname,
    email,
    password: passwordHash,
    phone,
    birthdate,
    city,
    country,
    photo,
    Category,
    isAdmin,
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Echec lors de la création du compte, réessayez plus tard. ",
    });
  }
  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  let user;

  user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return res
      .status(404)
      .json({ message: "L'email que vous avez rentré n'existe pas." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(404)
      .json({ message: "L'email et le mot de passe ne corresponde pas." });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  delete user.password;
  res.status(200).json({
    message: "Logged In",
    user: user.toObject({ getters: true }),
    token: token,
  });
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    return res.status(500).json({
      message: "Un problème est survenu, impossible de trouver l'utilisateur",
    });
  }

  if (!user) {
    return res.status(404).json({
      message: "Impossible de touver cette utilisateur",
    });
  }

  res.json({ message: "Utilisateur supprimé" });
};

export const updateUser = async (req, res, next) => {
  const {
    id,
    gender,
    firstname,
    lastname,
    email,
    password,
    phone,
    birthdate,
    city,
    country,
    photo,
    category,
    isAdmin,
  } = req.body;

  const user = await User.findById(id);
  if (!user) {
    return res.status(500).json({
      message: "Impossible de touver cette utilisateur",
    });
  }
  // MDP
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //   user.id = user.id === id ? user.id : id;
  user.gender = user.gender === gender ? user.gender : gender;
  user.firstname = user.firstname === firstname ? user.firstname : firstname;
  user.lastname = user.lastname === lastname ? user.lastname : lastname;
  user.email = user.email === email ? user.email : email;
  user.password = user.password === passwordHash ? user.password : passwordHash;
  user.phone = user.phone === phone ? user.phone : phone;
  user.birthdate = user.birthdate === birthdate ? user.birthdate : birthdate;
  user.city = user.city === city ? user.city : city;
  user.country = user.country === country ? user.country : country;
  user.photo = user.photo === photo ? user.photo : photo;
  user.category = user.category === category ? user.category : category;
  user.isAdmin = user.isAdmin === isAdmin ? user.isAdmin : isAdmin;

  try {
    user.save();
  } catch (err) {
    return res.json("Utilisateur mis a jour");
  }
};
