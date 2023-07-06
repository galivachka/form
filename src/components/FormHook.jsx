import {useFormik} from 'formik'
import React from 'react';

 const initialValues = {
  name:'Jason',
  email: '',
  phone : ''
 };
 const onSubmit = (values) => {
  console.log('Form Data:', values);
 }
 const validate = (values) => {
  let errors ={};

  if (!values.name){
    errors.name = 'Required';
  }

  if (!values.phone){
    errors.phone = 'Required';
  }

  if (!values.email){
    errors.email = 'Required';
  }else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = 'Invalid email';
  }


  if (!values.phone){
    errors.phone = 'Required';
  }else if (
    !/^\+998(33|7(0|1|7)|88|9\d{1})(\d{7})$/.test(values.phone)
  ) {
    errors.phone = 'Invalid phone';
  }
  return errors;
 }
const FormHook = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  return (
    <div>
    <form onSubmit ={formik.handleSubmit}>
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


      <button type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default FormHook