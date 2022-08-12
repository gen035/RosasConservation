import { useContext } from "react";
import { Modal } from 'next-modal'
import useTranslation from 'next-translate/useTranslation';
import AppContext from "../AppContext";
import ContactForm from "./contactForm";

export default function ContactModal() {
  const { t } = useTranslation();
  const [context, setContext] = useContext(AppContext);
  const isOpened = context && context.isContactModalOpened;

  const setToggleModal = () => {
    setContext({...context, isContactModalOpened: !isOpened});
  };

  return (
    <>
      <Modal className='modal' toggle={isOpened} setToggle={setToggleModal}>
        <Modal.Header className='modal-header fade-in-left animation-duration-500ms animation-forwards'>
          <h3>{t('modal:title')}</h3>
        </Modal.Header>
        <Modal.Body className='modal-body fade-in animation-duration-800ms animation-forwards'>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  )
}
