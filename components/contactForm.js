import { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import useTranslation from 'next-translate/useTranslation';

export default function ContactForm() {
  const form = useRef();
  const { t } = useTranslation();
  const [ formState, setFormState ] = useState('clean');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormState('submitting');

    const { honey } = data;
  
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;

    if (honey === '') {
      setTimeout(() => {
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Success:', result);
          setFormState('success');
        }, (error) => {
          console.log('Error:', error)
          setFormState('error');
        });
      }, 500);
    } else {
      setFormState('error');
    }
  };

  const renderForm = () => (
    <form className='form-contact' onSubmit={handleSubmit(onSubmit)} ref={form}>
      <label htmlFor="user_name">{t('contact:name')}</label>
      <input {...register('user_name', {required: true})} />
      {errors.user_name && <p>{t('contact:name_error')}</p>}
      <label htmlFor="user_email">{t('contact:email')}</label>
      <input {...register('user_email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
      {errors.user_email && <p>{t('contact:email_error')}</p>}
      <label htmlFor="message">{t('contact:message')}</label>
      <textarea name="message" {...register("message")} />
      <input {...register('honey')} />
      <button type="submit" className="button" disabled={formState === 'submitting'}>
          <p className="button-text">
            {formState === 'submitting' ? t('contact:submitting') : t('contact:submit')}
          </p>
          <div className="button-icon-container">
            <p className="button-icon fa-regular fa-paper-plane"></p>
          </div>
        </button>
    </form>
  );

  const renderSuccess = () => (
    <>
      <i className="fa-solid fa-envelope-circle-check"></i>
      <p className="form-success">{t('contact:success')}</p>
    </>
  );

  const renderError = () => (
    <>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p className="form-success">{t('contact:error')}</p>
    </>
  );

  return (
    <div className={`form form--${formState}`}>
      {(formState === 'clean' || formState === 'submitting') && renderForm()}
      {formState === 'success' && renderSuccess()}
      {formState === 'error' && renderError()}
    </div>
  )
}
