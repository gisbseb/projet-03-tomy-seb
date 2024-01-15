import express from "express";

import User from "../models/UserModel.js";

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

export const createUser = async (req, res, next) => {
  console.log("hello");
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

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email.toLowerCase() });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("Cet Email est déja utilisé", 422);
    return next(error);
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
    const error = new HttpError(
      "Echec lors de la création du compte, réessayez plus tard.",
      500
    );
    return next(error);
  }
  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};
