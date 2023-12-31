const express = require("express");
const router = express.Router();

const REPLACE_ME = "HELP REPLACE ME!!!!";

const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../db/videoGames");

// GET - /api/video-games - get all video games
router.get("/", async (req, res, next) => {
  try {
    const videoGames = await getAllVideoGames();
    res.send(videoGames);
  } catch (error) {
    next(error);
  }
});

// GET - /api/video-games/:id - get a single video game by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const videoGame = await getVideoGameById(id);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// POST - /api/video-games - create a new video game
router.post("/", async (req, res, next) => {
  try {
    const newGame = req.body;
    const result = await createVideoGame(newGame);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

// PUT - /api/video-games/:id - update a single video game by id
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const request = req.body;
    const result = await updateVideoGame(id, request);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deleteVideoGame(id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

module.exports = router;
