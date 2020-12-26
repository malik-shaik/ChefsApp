import * as Yup from 'yup';
import errorMessages from './errorMessages';
const {
  EMAIL_REQUIRED,
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  INVALID_EMAIL,
  INVALID_FIRSTNAME,
  INVALID_LASTNAME,
  INVALID_PASSWORD,
  INVALID_PHONENUMBER,
  PASSWORD_REQUIRED,
  PHONENUMBER_REQUIRED
} = errorMessages;

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).label('Email'),
  password: Yup.string().required(PASSWORD_REQUIRED).min(4, INVALID_PASSWORD).label('Password')
});

const profileUpdateValidationSchema = Yup.object().shape({
  firstname: Yup.string().required(FIRSTNAME_REQUIRED).min(2, INVALID_FIRSTNAME),
  lastname: Yup.string().required(LASTNAME_REQUIRED).min(2, INVALID_LASTNAME),
  email: Yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL),
  phone: Yup.number()
    .required(PHONENUMBER_REQUIRED)
    .lessThan(8, INVALID_PHONENUMBER)
    .moreThan(8, INVALID_PHONENUMBER)
});

export default { loginValidationSchema, profileUpdateValidationSchema };
