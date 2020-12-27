import * as Yup from 'yup';
import errorMessages from './errorMessages';
const {
  CITY_REQUIRED,
  INVALID_CITY,
  STREET_REQUIRED,
  INVALID_STREET,
  POSTALCODE_REQUIRED,
  INVALID_POSTAL,
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
  city: Yup.string().required(CITY_REQUIRED).min(2, INVALID_CITY),
  street: Yup.string().required(STREET_REQUIRED).min(2, INVALID_STREET),
  email: Yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL),
  postal: Yup.string()
    .required(POSTALCODE_REQUIRED)
    .matches(/^[0-9]+$/, INVALID_POSTAL)
    .min(4, INVALID_POSTAL)
    .max(4, INVALID_POSTAL),
  phone: Yup.string()
    .required(PHONENUMBER_REQUIRED)
    .matches(/^[0-9]+$/, INVALID_PHONENUMBER)
    .min(8, INVALID_PHONENUMBER)
    .max(8, INVALID_PHONENUMBER)
});

export default { loginValidationSchema, profileUpdateValidationSchema };
