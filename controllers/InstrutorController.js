import Instrutor from "../models/Instrutor.js"

export const createInstrutor = async (req, res, next) => {
    const instrutor = new Instrutor(req.body);
    try {
        const createInstrutor = await instrutor.save();

        res.status(201).json(createInstrutor);
    } catch (error) {
        next(error);
    }
};

export const updateInstrutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateInstrutor = await Instrutor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updateInstrutor);
    } catch (error) {
        next(error);
    }
}

export const deleteInstrutor = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Instrutor.findByIdAndDelete(id);
        res.status(200).json({ message: "Instrutor excluído com sucesso." });
    } catch (error) {
        next(error);
    }
}

export const getInstrutor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const instrutor = await Instrutor.findById(id);
        if (!instrutor) {
            res.status(422).json({ message: "Instrutor não encontrado!" });
            return;
        }
        res.status(200).json(instrutor);
    } catch (error) {
        next(error);
    }
}


export const getInstrutores = async (req, res, next) => {
    try {
        const instrutores = await Instrutor.find();
        res.status(200).json(instrutores);
    } catch (error) {
        next(error);
    }
}