import classes from "../AuthModal.module.scss";
import React, {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormField from "../../FormField";
import {registerFormSchema} from "../../../utils/schemas/registerValidation";
import FormButton from "../../FormButton";
import {RegisterUserDto} from "../../../utils/api/types";
import {userApi} from "../../../utils/api";
import {setCookie} from "nookies";
import Alert from "@material-ui/lab/Alert";
import {setUserData} from "../../../redux/slices/user";
import {useAppDispatch} from "../../../redux/hooks";

interface RegisterProps {
    openMainForm: () => void
}

const RegisterForm: React.FC<RegisterProps> = ({openMainForm}) => {


    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(registerFormSchema)
    });
    const onSubmit = async (dto: RegisterUserDto) => {
        try {
            const data = await userApi.register(dto);
            console.log('Backend answer at login user:', data)
            setCookie(null, 'authToken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            setErrorMessage(false);
            dispatch(setUserData(data));
        } catch (error) {
            setErrorMessage(true);
        }
    }

    return (
        <>
            <div className={classes.modalContainer}>
                <h2>Регистрация</h2>
                <FormProvider {...form}>
                    <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField name={"fullName"} label="Имя и Фамилия"/>
                        <FormField name={"email"} label="Почта"/>
                        <FormField name={"password"} label="Пароль"/>

                        {errorMessage &&
                        <Alert severity="error" className={"mb-20"}>Данные не валидны для регистрации</Alert>}

                        <div>
                            <FormButton
                                text={'Зарегистрироваться'}
                            />

                            <span>Уже есть аккаунт?&nbsp;</span>
                            <button
                                className={classes.simpleBtn}
                                onClick={openMainForm}>
                                Войти
                            </button>
                        </div>

                    </form>
                </FormProvider>

            </div>

        </>
    )
}

export default RegisterForm;