import { useFormik } from 'formik';

const initialValues = {
  name: 'John',
  email: '',
  phone: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

const validate = (values) => {
  // values.name, values.email, values.channel
  // errors.name, errors.email, errors.channel

  let errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = 'Invalid email format';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\+998(33|7(0|1|7)|88|9\d{1})(\d{7})$/.test(values.phone)) {
    errors.phone = 'Invalid phone format';
  }

  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   tel pattern: '^\+998(33|7(0|1|7)|88|9\d{1})(\d{7})$'
  //   console.log('Form values', formik.values);
  //   console.log('Form errors', formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone ? (
            <div className='error'>{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            name='channel'
            id='channel'
            value={formik.values.channel}
            onChange={formik.handleChange}
          />
          {formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
