import {TextField} from "@material-ui/core";
import React from "react";
import {useFormContext} from "react-hook-form";

interface FormFieldProps {
    name: string;
    label: string;
}


const FormField:React.FC<FormFieldProps> = ({name, label}) => {

    const {register, formState} = useFormContext();

    return (
        <TextField
            {...register(name)}
            error={!!formState.errors[name]?.message}
            helperText={formState.errors[name]?.message}
            className={"mb-30"}
            name={name}
            label={label}
            type={name === "password" ? "password" : "text"}
            variant="outlined"
            size="small"
            fullWidth
        />
    )
}

export default FormField;