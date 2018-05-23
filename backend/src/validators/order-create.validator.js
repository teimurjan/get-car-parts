import yup from 'yup';

const MIN_CAR_YEAR = 1892;

const orderCreateValidator = yup.object().shape({
  vinCode: yup.string().required(),
  year: yup
    .number()
    .min(MIN_CAR_YEAR)
    .max(new Date().getFullYear())
    .required(),
  partType: yup.string().required(),
  comment: yup.string(),
  carModelId: yup
    .number()
    .min(1)
    .required(),
});

export default orderCreateValidator;
