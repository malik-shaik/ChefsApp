import moment from 'moment';

export const getImageSrc = (imageName) =>
  `https://res.cloudinary.com/hcogndlqd/image/upload/uploads/${imageName}`;

export const getDateInfo = (date) => moment(date).format('dddd, D MMMM YYYY');
