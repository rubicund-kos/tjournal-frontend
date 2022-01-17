import {Button} from "@material-ui/core";
import React, {useEffect} from "react";
import {useFormContext} from "react-hook-form";

interface FormButtonProps {
    text: string;
}

const FormButton:React.FC<FormButtonProps> = ({text}) => {
    const form = useFormContext();
    return (
        <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            type="submit"
            color={"primary"}
            variant="contained"
            fullWidth>
            {text}
        </Button>
    )
}

export default FormButton;