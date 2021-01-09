import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  openFilterModal,
  filterLevelAdd,
  filterLevelRemove,
  filterPromoterAdd,
  filterPromoterRemove,
  filterDecisionAdd,
  filterDecisionRemove,
  copyFilter,
} from 'store/contacts/actions';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles.module.css';
import Button from '../Button';

function Modal() {
  const dispatch = useDispatch();
  const [level, setLevel] = useState({ High: false, Middle: false, Low: false });
  const [promoter, setPromoter] = useState({ Promoter: false, Detractor: false });
  const [decision, setDecision] = useState({
    Decision1: false,
    Decision2: false,
    Decision3: false,
  });

  const levelChange = e => {
    const val = e.target.value;
    setLevel({
      ...level,
      [val]: e.target.checked,
    });
    // eslint-disable-next-line no-unused-expressions
    e.target.checked ? dispatch(filterLevelAdd(val)) : dispatch(filterLevelRemove(val));
  };
  const promoterChange = e => {
    const val = e.target.value;
    setLevel({
      ...level,
      [val]: e.target.checked,
    });
    // eslint-disable-next-line no-unused-expressions
    e.target.checked
      ? dispatch(filterPromoterAdd(val))
      : dispatch(filterPromoterRemove(val));
  };
  const decisionChange = e => {
    const val = e.target.value;
    setLevel({
      ...level,
      [val]: e.target.checked,
    });
    // eslint-disable-next-line no-unused-expressions
    e.target.checked
      ? dispatch(filterDecisionAdd(val))
      : dispatch(filterDecisionRemove(val));
  };
  return (
    <>
      <div
        className={styles.modal}
        onClick={() => {
          dispatch(openFilterModal());
        }}
      ></div>
      <Formik
        initialValues={{
          level: '',
          decision: '',
          promoter: '',
        }}
        onSubmit={(values, { setSubmitting }) => {}}
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
              <h2 className={styles.title}>Filter by</h2>
              <CloseIcon
                onClick={() => {
                  dispatch(openFilterModal());
                }}
                className={styles.close}
              />
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.countsAppliedFilter}>3 filters applied</span>
              <h4 className={styles.deleteText}>Reset All</h4>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Priority Level</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={levelChange}
                      name="level"
                      value="High"
                      color="primary"
                      checked={level.High}
                    />
                  }
                  label="High"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={levelChange}
                      name="level"
                      value="Middle"
                      color="primary"
                      checked={level.Middle}
                    />
                  }
                  label="Middle"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={levelChange}
                      name="level"
                      value="Low"
                      color="primary"
                      checked={level.Low}
                    />
                  }
                  label="Low"
                />
              </div>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Promoter/Detractor</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={promoterChange}
                      value="Promoter"
                      name="promoter"
                      color="primary"
                    />
                  }
                  label="Promoter"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={promoterChange}
                      value="Detractor"
                      name="promoter"
                      color="primary"
                    />
                  }
                  label="Detractor"
                />
              </div>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Decision</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={decisionChange}
                      value="Decision1"
                      name="decision"
                      color="primary"
                    />
                  }
                  label="Decision1"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={decisionChange}
                      value="Decision2"
                      name="decision"
                      color="primary"
                    />
                  }
                  label="Decision2"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={decisionChange}
                      value="Decision3"
                      name="decision"
                      color="primary"
                    />
                  }
                  label="Decision3"
                />
              </div>
            </div>

            <div className={styles.bottomBtns}>
              <Button
                text="Cancel"
                isCancel="true"
                handleClick={() => {
                  dispatch(openFilterModal());
                }}
              />
              <button
                onClick={() => {
                  dispatch(copyFilter());
                  dispatch(openFilterModal());
                }}
                className={styles.formBtn}
                type="submit"
                disabled={isSubmitting}
              >
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
