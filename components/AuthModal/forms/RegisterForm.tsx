import classes from "../AuthModal.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {Button, TextField} from "@material-ui/core";
import React from "react";

interface RegisterProps {
    openMainForm: () => void
}

const RegisterForm: React.FC<RegisterProps> = ({openMainForm}) => {
    return (
        <>
            <div className={classes.navigationButtons}>
                <span onClick={openMainForm} className={classes.backBtn}>
                    <ArrowBackIcon/>
                    <span>Назад</span>
                </span>
            </div>
            <div className={classes.modalContainer}>
                <h2>Регистрация</h2>
                <form noValidate autoComplete="off">
                    <TextField
                        className={"mb-30"}
                        id="fullname"
                        label="Имя и Фамилия"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        className={"mb-30"}
                        id="email"
                        label="Почта"
                        type="email"
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
                            Зарегистрироваться
                        </Button>

                        <span>Уже есть аккаунт?&nbsp;</span>
                        <button
                            className={classes.simpleBtn}
                            onClick={openMainForm}>
                            Войти
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default RegisterForm;