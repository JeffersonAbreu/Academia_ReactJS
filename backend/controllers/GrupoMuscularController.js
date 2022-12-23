import GrupoMuscular from "../models/GrupoMuscular.js"

export const createGrupoMuscular = async (req, res, next) => {
    const grupoMuscular = new GrupoMuscular(req.body);
    try {
        const createGrupoMuscular = await grupoMuscular.save();
        res.status(201).json(createGrupoMuscular);
    } catch (error) {
        next(error);
    }
}

export const updateGrupoMuscular = async (req, res, next) => {
    try {
        const updateGrupoMuscular = await GrupoMuscular.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateGrupoMuscular);
    } catch (error) {
        next(error);
    }
}

export const deleteGrupoMuscular = async (req, res, next) => {
    try {
        // teste de outra maneira de fazer
        const { id } = req.params;
        await GrupoMuscular.findByIdAndDelete(id);
        res.status(200).json({ message: "GrupoMuscular excluído com sucesso." });
    } catch (error) {
        next(error);
    }
}

export const getGrupoMuscular = async (req, res, next) => {
    try {
        const { id } = req.params;
        const grupoMuscular = await GrupoMuscular.findById(id);
        if (!grupoMuscular) {
            res.status(422).json({ message: "GrupoMuscular não encontrado!" });
            return;
        }
        res.status(200).json(grupoMuscular);
    } catch (error) {
        next(error);
    }
}


export const getGrupoMusculares = async (req, res, next) => {
    try {
        const grupoMusculares = await GrupoMuscular.find();
        res.status(200).json(grupoMusculares);
    } catch (error) {
        next(error);
    }
}