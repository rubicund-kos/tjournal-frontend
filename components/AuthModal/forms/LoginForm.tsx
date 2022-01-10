import classes from "../AuthModal.module.scss";
import React from "react";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schemas/loginValidation";
import FormField from "../../FormField";
import FormButton from "../../FormButton";


interface LoginFormProps {
    openMainForm: () => void;
    openRegisterForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({openMainForm, openRegisterForm}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = (data: any) => console.log(data);

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