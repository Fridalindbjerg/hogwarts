import * as housesRepository from "../repositories/houses.respository.js";
import HTTPError from "../errorhandling/HTTPerror.js";

export async function getAllHouses(req, res) {
  const allHouses = await housesRepository.getAllHouses();
  res.json(allHouses);
}

export async function singleHouse(req, res) {
  const id = req.params.id;
  const house = await housesRepository.getHouseById(id);

  if (!house) {
    // res.status(404).json({
    //   message: "House does not exist",
    //   error: "not found",
    //   statusCode: 404,
    // });
    throw new HTTPError(404, "house not found");
  } else {
    res.status(200).json(house);
  }
}
