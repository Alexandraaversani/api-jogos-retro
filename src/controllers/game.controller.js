import GameModel from "../models/game.model.js";

class GameController {
    async findAll(req, res) {
        try {
            const games = await GameModel.findAll();

            return res.status(200).json(games);
        } catch (error) {
            console.error("Error finding all games: ", error)
            return res.status(500).json({ error: "Error finding all games", error });

        }
    }
            async create(req, res) {    
                try {       
                    const { name, platforms } = req.body;

                    // Validação básica
                    if (!name || !platforms) {
                        return res.status(400).json({ error: "Name and platform fields are required!" });
                    }

                    const data = {
                        name,
                        platforms,
                    };

                    const newGame = await GameModel.create(data);

                    return res.status(201).json({
                        message: "New game sucessfully created!",
                        newGame,
                    });
                } catch (error) {
                    console.error("Error creating a new game", error);
                    res.status(500).json({ error: "Error creating a new game", error });
                }
            }
        }


    export default new GameController();