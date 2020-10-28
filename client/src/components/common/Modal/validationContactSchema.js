import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required('Поле обязательное для заполенения'),
    decision: yup.string().required('Поле обязательное для заполенения'),
    promoter: yup.string().required('Поле обязательное для заполенения'),
    level: yup.string().required('Поле обязательное для заполенения'),
    relationship: yup.string().required('Поле обязательное для заполенения'),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  export default schema;