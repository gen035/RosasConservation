import { useContext, useRef } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import useTranslation from 'next-translate/useTranslation';
import AppContext from "../AppContext";

export default function ContactForm() {
  const { t } = useTranslation();
  const [context, setContext] = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <form className='form-contact' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">{t('contact:name')}</label>
      <input {...register('name', {required: true})} />
      {errors.name && <p>{t('contact:name_error')}</p>}
      <label htmlFor="name">{t('contact:email')}</label>
      <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
      {errors.email && <p>{t('contact:email_error')}</p>}
      <label htmlFor="message">{t('contact:message')}</label>
      <textarea name="message" {...register("message")} />
      <button type="submit" className="button">
          <p className="button-text">
            {t('contact:submit')}
          </p>
          <div className="button-icon-container">
            <p className="button-icon fa-regular fa-paper-plane"></p>
          </div>
        </button>
    </form>
  )
}
