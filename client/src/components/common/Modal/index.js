import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { addContact } from 'store/contacts/actions';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import styles from './styles.module.css';
import Textarea from '../Textarea';
import validationSchema from './validationContactSchema';
import Button from '../Button';

function Modal({ closeModal }) {
  const dispatch = useDispatch();
  // const levelOptions = useSelector(state => state.contacts.levelOptions);
  // const promoterOptions = useSelector(state => state.contacts.promoterOptions);
  // const decisionOptions = useSelector(state => state.contacts.decisionOptions);

  return (
    <>
      <div className={styles.modal} onClick={closeModal}></div>
      <Formik
        initialValues={{
          name: '',
          job: '',
          decision: '',
          promoter: '',
          level: '',
          relationship: '',
          topics: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addContact(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={styles.modalInfo} onSubmit={handleSubmit}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>New Priority Contact</h2>
              <CloseIcon className={styles.close} onClick={closeModal} />
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactText}>Contact Name</span>
              <input
                className={errors.name && touched.name && errors.name ? styles.error : ''}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span className={styles.errorText}>
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactText}>Job</span>
              <input
                className={errors.job && touched.job && errors.job ? styles.error : ''}
                type="text"
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job}
              />
              <span className={styles.errorText}>
                {errors.job && touched.job && errors.job}
              </span>
            </div>

            <div className={styles.doubleInputField}>
              <div className={styles.aloneInputField}>
                <span className={styles.aloneInputText}>Decision Rights</span>

                <Field
                  className={
                    errors.decision && touched.decision && errors.decision
                      ? styles.error
                      : styles.selectField
                  }
                  as="select"
                  name="decision"
                >
                  <option disabled selected value="">
                    Choose decision
                  </option>
                  <option value="Decision1">Decision1</option>
                  <option value="Decision2">Decision2</option>
                  <option value="Decision3">Decision3</option>
                </Field>

                <span className={styles.errorText}>
                  {errors.decision && touched.decision && errors.decision}
                </span>
              </div>
              <div className={styles.aloneInputField}>
                <span className={styles.aloneInputText}>Promoter/Detractor</span>

                <Field
                  className={
                    errors.promoter && touched.promoter && errors.promoter
                      ? styles.error
                      : styles.selectField
                  }
                  as="select"
                  name="promoter"
                  placeholder="lol"
                >
                  <option disabled selected value="">
                    Choose promoter
                  </option>
                  <option value="Promoter">Promoter</option>
                  <option value="Detractor">Detractor</option>
                </Field>
                <span className={styles.errorText}>
                  {errors.promoter && touched.promoter && errors.promoter}
                </span>
              </div>
            </div>
            <div className={styles.doubleInputField}>
              <div className={styles.aloneInputField}>
                <span className={styles.aloneInputText}>Priority Level</span>

                <Field
                  className={
                    errors.level && touched.level && errors.level
                      ? styles.error
                      : styles.selectField
                  }
                  as="select"
                  name="level"
                >
                  <option disabled selected value="">
                    Choose level
                  </option>
                  <option value="High">High</option>
                  <option value="Middle">Middle</option>
                  <option value="Low">Low</option>
                </Field>
                <span className={styles.errorText}>
                  {errors.level && touched.level && errors.level}
                </span>
              </div>
              <div className={styles.aloneInputField}>
                <span className={styles.aloneInputText}>Relationship Owner</span>
                <input
                  className={
                    errors.relationship && touched.relationship && errors.relationship
                      ? styles.error
                      : ''
                  }
                  type="text"
                  name="relationship"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.relationship}
                />
                <span className={styles.errorText}>
                  {errors.relationship && touched.relationship && errors.relationship}
                </span>
              </div>
            </div>
            <h2 className={styles.textAreaTitle}>Priority topics for this individual</h2>
            <Textarea
              onBlur={handleBlur}
              name="topics"
              onChange={handleChange}
              value={values.topics}
              className={styles.textBox}
            />
            <div className={styles.bottomBtns}>
              <Button text="Cancel" isCancel={true} handleClick={closeModal} />
              <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Modal;
