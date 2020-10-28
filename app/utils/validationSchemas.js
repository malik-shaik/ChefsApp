import * as Yup from 'yup';
import errorMessages from './errorMessages';
const { EMAIL_REQUIRED, INVALID_EMAIL, PASSWORD_REQUIRED, INVALID_PASSWORD } = errorMessages;

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).label('Email'),
  password: Yup.string().required(PASSWORD_REQUIRED).min(4, INVALID_PASSWORD).label('Password')
});

export default { loginValidationSchema };
