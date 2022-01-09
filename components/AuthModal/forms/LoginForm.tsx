import classes from "../AuthModal.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {Button, TextField} from "@material-ui/core";
import React from "react";


interface LoginFormProps {
    openMainForm: () => void;
    openRegisterForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({openMainForm, openRegisterForm}) => {
    return (
        <>
            <div className={classes.navigationButtons}>
                <span onClick={openMainForm} className={classes.backBtn}>
                    <ArrowBackIcon/>
                    <span>Назад</span>
                </span>
            </div>
            <div className={classes.modalContainer}>
                <h2>Вход через почту</h2>
                <form noValidate autoComplete="off">
                    <TextField
                        className={"mb-30"}
                        id="email"
                        label="Почта"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        className={"mb-30"}
                        id="password"
                        label="Пароль"
                        type="password"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <div>
                        <Button color={"primary"} variant="contained" fullWidth>
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