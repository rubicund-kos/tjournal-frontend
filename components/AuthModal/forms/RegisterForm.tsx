import classes from "../AuthModal.module.scss";
import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormField from "../../FormField";
import {registerFormSchema} from "../../../utils/schemas/registerValidation";
import FormButton from "../../FormButton";

interface RegisterProps {
    openMainForm: () => void
}

const RegisterForm: React.FC<RegisterProps> = ({openMainForm}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(registerFormSchema)
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <div className={classes.modalContainer}>
                <h2>Регистрация</h2>
                <FormProvider {...form}>
                    <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField name={"fullname"} label="Имя и Фамилия"/>
                        <FormField name={"email"} label="Почта"/>
                        <FormField name={"password"} label="Пароль"/>
                        <div>
                            <FormButton text="Зарегистрироваться"/>

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