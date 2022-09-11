import * as yup from 'yup';

const Validation = yup.object({
    email: yup.string().email('Geçerli bir email adresi giriniz!').required('*Zorunlu alan'),
    password: yup.string().min(5, 'En az 5 karakter almalıdır!').required('*Zorunlu alan'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Aynı değil!').required('*Zorunlu alan')
});

export default Validation;