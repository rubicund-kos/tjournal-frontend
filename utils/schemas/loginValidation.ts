import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    email: yup.string().email('Не валидный адрес эл.почты').required('Почта обязательна'),
    password: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязателен'),
});
