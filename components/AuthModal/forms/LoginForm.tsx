import classes from "../AuthModal.module.scss";
import React from "react";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schemas/loginValidation";
import FormField from "../../FormField";
import FormButton from "../../FormButton";
import {LoginDto} from "../../../utils/api/types";
import {userApi} from "../../../utils/api";
import {setCookie} from "nookies";


interface LoginFormProps {
    openMainForm: () => void;
    openRegisterForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({openMainForm, openRegisterForm}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit =  async (dto: LoginDto) => {
        try {
            const data = await userApi.login(dto);
            console.log('Backend answer at login user:', data)
            setCookie(null, 'authToken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            console.log(data);
        } catch (err) {
            alert('ошибка при регистрации')
            console.warn('Ошибка при регистрации', err)
        }
    }

    return (
        <>
            <div className={classes.modalContainer}>
                <h2>Вход через почту</h2>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField name={"email"} label={"Почта"}/>
                        <FormField name={"password"} label={"Пароль"}/>
                        <div>
                            <FormButton text="Войти"/>
                            <button className={classes.simpleBtn} onClick={openRegisterForm}>
                                Регистрация
                            </button>
                        </div>

                    </form>
                </FormProvider>

            </div>

        </>
    )
}

export default LoginForm;