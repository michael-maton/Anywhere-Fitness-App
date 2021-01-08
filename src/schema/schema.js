import * as yup from 'yup';

export default yup.object().shape({

    email: yup
    .string()
    .email('Email address must be valid')
    .required('Email is required'),

    password: yup
    .string()
    .required('Password is required'),
    
});