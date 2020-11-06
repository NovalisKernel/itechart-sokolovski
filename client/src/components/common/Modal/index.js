import React from 'react';
import styles from './styles.module.css';
import Textarea from '../Textarea';
import { Formik } from 'formik';
import validationSchema from './validationContactSchema';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import Button from '../Button';
import {addContact} from 'store/contacts/actions';
import {useDispatch} from 'react-redux';


function Modal({closeModal}){
    const dispatch = useDispatch();
    return(
        <>
        <div className={styles.modal} onClick = {closeModal}>
        </div>
        <Formik 
            initialValues={{ name: '', decision: '',promoter:'',level:'',relationship:'',topics:''}}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(addContact(values))
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
                    <CloseIcon className={styles.close} onClick = {closeModal}/>
                </div>
                <div className={styles.contactBlock}>
                    <span className={styles.contactText}>Contact Name</span>
                    <input className={errors.name && touched.name && errors.name?styles.error:''}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <span className={styles.errorText}>{errors.name && touched.name && errors.name}</span>
                    
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Decision Rights</span>
                        <input className={errors.decision && touched.decision && errors.decision?styles.error:''}
                            type="text"
                            name="decision"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.decision}
                        />
                        <span className={styles.errorText}>{errors.decision && touched.decision && errors.decision}</span>

                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Promoter/Detractor</span>
                        <input className={errors.promoter && touched.promoter && errors.promoter?styles.error:''}
                            type="text"
                            name="promoter"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.promoter}
                        />
                        <span className={styles.errorText}>{errors.promoter && touched.promoter && errors.promoter}</span>
                    </div>
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Priority Level</span>
                        <input className={errors.level && touched.level && errors.level?styles.error:''}
                            type="text"
                            name="level"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.level}
                        />
                        <span className={styles.errorText}>{errors.level && touched.level && errors.level}</span>
                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Relationship Owner</span>
                        <input className={errors.relationship && touched.relationship && errors.relationship?styles.error:''}
                            type="text"
                            name="relationship"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.relationship}
                        />
                        <span className={styles.errorText}>{errors.relationship && touched.relationship && errors.relationship}</span>
                    </div>
                </div>
                <h2 className={styles.textAreaTitle}>Priority topics for this individual</h2>
                <Textarea onBlur={handleBlur} name="topics" onChange={handleChange} value={values.topics}  className={styles.textBox}/>
                <div className={styles.bottomBtns}>
                    <Button text="Cancel" isCancel={true} handleClick = {closeModal}/>
                    <button className={styles.formBtn} type="submit" disabled={isSubmitting}>Save</button>

                </div>
                </form>
          )}
            </Formik>
        </>
    )
}

export default Modal;