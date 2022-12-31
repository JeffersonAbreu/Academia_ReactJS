import FormInput from "../FormInput";

const FormGrupoMuscular = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <FormInput type="text" field="nome" placeholder="Membros Superiores" label="Nome" onChange={handleChange} value={inputs?.nome} error={errors?.nome} />
                </div>
            </div>
        </>
    );
}

export default FormGrupoMuscular;
