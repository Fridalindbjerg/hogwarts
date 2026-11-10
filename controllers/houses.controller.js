import * as housesRepository from "../repositories/houses.respository.js";

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
    throw new Error("house does not exist");
  } else {
    res.status(200).json(house);
  }
}
