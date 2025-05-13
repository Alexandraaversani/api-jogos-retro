import RecordModel from "../models/record.model.js";

class RecordController {
    async findAll(req, res) {
        try {
            const records = await RecordModel.findAll();

            return res.status(200).json(records);
        } catch (error) {
            console.error("Error finding all records: ", error)
            return res.status(500).json({ error: "Error finding all records", error });
        }
    }


    async create(req, res) {
        try {
            const { userId, gameId, score, screenshot } = req.body;

            // Validação básica
            if (!userId || !gameId || !score || !screenshot) {
                return res.status(400).json({ error: "User ID, game ID, screenshot and score fields are required!" });
            }

            const data = {
                userId,
                gameId,
                score,
                gameId,
            };

            const newRecord = await RecordModel.create(data);

            return res.status(201).json({
                message: "New record sucessfully created!",
                newRecord,
            });
        } catch (error) {
            console.error("Error creating a new record", error);
            res.status(500).json({ error: "Error creating a new record game",});
        }
    }
}

export default new RecordController();