import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import { editContact, changeContact, openDeleteModal } from 'store/contacts/actions';
import Textarea from '../Textarea';
import Button from '../Button';
import validationSchema from './validationContactSchema';
import styles from './styles.module.css';

function EditContact({ contact }) {
  const editContactId = useSelector(state => state.contacts.editContactId);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.modal} onClick={() => dispatch(editContact(null))}></div>
      <Formik
        initialValues={{
          id: contact.id,
          name: contact.name,
          job: contact.job,
          decision: contact.decision,
          promoter: contact.promoter,
          level: contact.level,
          relationship: contact.relatOwner,
          topics: contact.topics,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(editContact(null));
          dispatch(changeContact(values));
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
              <h2 className={styles.title}>Edit Priority Contact</h2>
              <CloseIcon
                className={styles.close}
                onClick={() => dispatch(editContact(null))}
              />
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactGeneralText}>
                <h2 className={styles.contactName}>{contact.name}</h2>
                <span className={styles.contactJob}>{contact.job}</span>
              </div>
              <h4
                onClick={() => {
                  dispatch(openDeleteModal(editContactId));
                  /*dispatch(deletedContact(editContactId))*/
                }}
                className={styles.deleteText}
              >
                Delete the contact
              </h4>
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
                  <option disabled selected value={values.decision}>
                    {values.decision}
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
                >
                  <option disabled selected value={values.promoter}>
                    {values.promoter}
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
                  <option disabled selected value={values.level}>
                    {values.level}
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
              <Button
                text="Cancel"
                isCancel={true}
                handleClick={() => dispatch(editContact(null))}
              />
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

export default EditContact;
