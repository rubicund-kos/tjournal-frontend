import classes from "../AuthModal.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {Button, TextField} from "@material-ui/core";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schemas/loginValidation";


interface LoginFormProps {
    openMainForm: () => void;
    openRegisterForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({openMainForm, openRegisterForm}) => {

    const {register, formState, handleSubmit} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <div className={classes.modalContainer}>
                <h2>Вход через почту</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("email")}
                        error={!!formState.errors.email?.message}
                        helperText={formState.errors.email?.message}
                        className={"mb-30"}
                        name="email"
                        label="Почта"
                        variant="outlined"
                        size="small"
                        fullWidth

                    />
                    <TextField
                        {...register("password")}
                        error={!!formState.errors.password?.message}
                        helperText={formState.errors.password?.message}
                        className={"mb-30"}
                        name="password"
                        label="Пароль"
                        type="password"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <div>
                        <Button type="submit" color={"primary"} variant="contained" fullWidth>
                            Войти
                        </Button>
                        <button className={classes.simpleBtn} onClick={openRegisterForm}>
                            Регистрация
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default LoginForm;