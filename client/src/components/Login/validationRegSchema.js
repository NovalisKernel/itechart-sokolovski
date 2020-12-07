import * as yup from 'yup';

let schema = yup.object().shape({
    password: yup.string().required('Поле обязательное для заполенения').min(6,'Пароль состоит из 6 символов'),
    email: yup.string().email().required('Поле обязательное для заполенения'),
    name:yup.string().required('Поле обязательно для заполнения'),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  export default schema;