import express from "express";
import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

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
  console.log(req.body);
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
