import express from "express";
import * as housesController from "../controllers/houses.controller.js";

const houseRouter = express.Router();

//HOUSES

// GET all houses
houseRouter.get("/", housesController.getAllHouses);

// GET single house by ID
houseRouter.get("/:id", housesController.singleHouse);

export default houseRouter;
