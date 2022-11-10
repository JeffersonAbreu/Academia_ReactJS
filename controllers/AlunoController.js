import Aluno from "../models/Aluno.js"

export const createAluno = async (req, res, next) => {
    const aluno = new Aluno(req.body);
    try {
        const createAluno = await aluno.save();
        
        res.status(201).json(createAluno);
    } catch (error) {
        next(error);
    }
};

export const updateAluno = async (req, res, next) => {
    try {
        const updateAluno = await Aluno.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateAluno);
    } catch (error) {
        next(error);
    }
}

export const deleteAluno = async (req, res, next) => {
    try {
        // teste de outra maneira de fazer
        const { id } = req.params;
        await Aluno.findByIdAndDelete(id);
        res.status(200).json({ message: "Aluno excluído com sucesso." });
    } catch (error) {
        next(error);
    }
}

export const getAluno = async (req, res, next) => {
    try {
        const { id } = req.params;
        const aluno = await Aluno.findById(id);
        if (!aluno) {
            res.status(422).json({ message: "Aluno não encontrado!" });
            return;
        }
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
}

export const getAlunos = async (req, res, next) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
}