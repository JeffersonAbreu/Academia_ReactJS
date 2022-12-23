import Ficha from "../models/Ficha.js"

export const createFicha = async (req, res, next) => {
    const ficha = new Ficha(req.body);
    try {
        const createFicha = await ficha.save();
        
        res.status(201).json(createFicha);
    } catch (error) {
        next(error);
    }
};

export const updateFicha = async (req, res, next) => {
    try {
        const updateFicha = await Ficha.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateFicha);
    } catch (error) {
        next(error);
    }
}

export const deleteFicha = async (req, res, next) => {
    try {
        // teste de outra maneira de fazer
        const { id } = req.params;
        await Ficha.findByIdAndDelete(id);
        res.status(200).json({ message: "Ficha excluída com sucesso." });
    } catch (error) {
        next(error);
    }
}

export const getFicha = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ficha = await Ficha.findById(id);
        if (!ficha) {
            return res.status(422).json({ message: "Ficha não encontrada!" });
        }
        res.status(200).json(ficha);
    } catch (error) {
        next(error);
    }
}


export const getFichas = async (req, res, next) => {
    try {
        const fichas = await Ficha.find();
        res.status(200).json(fichas);
    } catch (error) {
        next(error);
    }
}