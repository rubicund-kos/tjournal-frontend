import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    fullname: yup.string().required('Поле обзятельно для заполнения'),
    email: yup.string().email('Не валидный адрес эл.почты').required('Почта обязательна'),
    password: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязателен'),
});
