import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  openFilterModal,
  filterLevelAdd,
  filterLevelRemove,
  filterPromoterAdd,
  filterPromoterRemove,
  filterDecisionAdd,
  filterDecisionRemove,
  changeCheckedLevel,
  changeCheckedPromoter,
  changeCheckedDecision,
  copyFilter,
  clearFilter,
} from 'store/contacts/actions';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles.module.css';
import Button from '../Button';

function Modal() {
  const dispatch = useDispatch();
  const level = useSelector(state => state.contacts.level);
  const promoter = useSelector(state => state.contacts.promoter);
  const decision = useSelector(state => state.contacts.decision);

  const checkedCount = [
    ...Object.values(level),
    ...Object.values(promoter),
    ...Object.values(decision),
  ].filter(item => item === true).length;

  const levelChange = e => {
    const val = e.target.value;
    dispatch(changeCheckedLevel({ name: val, check: e.target.checked }));
    // eslint-disable-next-line no-unused-expressions
    e.target.checked ? dispatch(filterLevelAdd(val)) : dispatch(filterLevelRemove(val));
  };
  const promoterChange = e => {
    const val = e.target.value;
    dispatch(changeCheckedPromoter({ name: val, check: e.target.checked }));
    // eslint-disable-next-line no-unused-expressions
    e.target.checked
      ? dispatch(filterPromoterAdd(val))
      : dispatch(filterPromoterRemove(val));
  };
  const decisionChange = e => {
    const val = e.target.value;
    dispatch(changeCheckedDecision({ name: val, check: e.target.checked }));
    // setLevel({
    //   ...level,
    //   [val]: e.target.checked,
    // });
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
              <span className={styles.countsAppliedFilter}>
                {checkedCount} filters applied
              </span>
              <button
                type="submit"
                onClick={() => dispatch(clearFilter())}
                className={styles.deleteText}
              >
                Reset All
              </button>
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
                      checked={promoter.Promoter}
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
                      checked={promoter.Detractor}
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
                      checked={decision.Decision1}
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
                      checked={decision.Decision2}
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
                      checked={decision.Decision3}
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
