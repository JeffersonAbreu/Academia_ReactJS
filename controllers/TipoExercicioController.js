import TipoExercicio from "../models/TipoExercicio.js"

export const createTipoExercicio = async (req, res, next) => {
    const tipoExercicio = new TipoExercicio(req.body);
    try {
        const createTipoExercicio = await tipoExercicio.save();
        
        res.status(201).json(createTipoExercicio);
    } catch (error) {
        next(error);
    }
};

export const updateTipoExercicio = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateTipoExercicio = await TipoExercicio.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updateTipoExercicio);
    } catch (error) {
        next(error);
    }
}

export const deleteTipoExercicio = async (req, res, next) => {
    try {
        const { id } = req.params;
        await TipoExercicio.findByIdAndDelete(id);
        res.status(200).json({ message: "TipoExercicio excluído com sucesso." });
    } catch (error) {
        next(error);
    }
}

export const getTipoExercicio = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tipoExercicio = await TipoExercicio.findById(id);
        if (!tipoExercicio) {
            res.status(422).json({ message: "TipoExercicio não encontrado!" });
            return;
        }
        res.status(200).json(tipoExercicio);
    } catch (error) {
        next(error);
    }
}

export const getTipoExercicios = async (req, res, next) => {
    try {
        const tipoExercicios = await TipoExercicio.find();
        res.status(200).json(tipoExercicios);
    } catch (error) {
        next(error);
    }
}