import React, { useState } from 'react';
import styles from './styles.module.css';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import logo from 'assets/img/logo.png';

function LoginPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');


  const handleClick = () => {
    alert(emailValue);
  };
  return (
    <div className={styles.main}>
      <div className={styles.leftLoginBlock}>
        <h1>Coro</h1>
        <div className={styles.form}>
          <label htmlFor="">
            <span>Email </span>
            <Input handleChange={(e) => setEmailValue(e.target.value)} type="email" value={emailValue} />
          </label>

          <label htmlFor="">
            <span>Password</span>
            <Input handleChange={(e) => setPassValue(e.target.value)} type="password" value={passValue} />
          </label>

          <Button text="Login" handleClick={() => handleClick()} />
          <p>Need help? <span>Contact Sales Ops</span></p>


        </div>
        <img src={logo} alt=""/>
      </div>
      <div className={styles.rightLoginBlock}>
        <h2>ILLU</h2>
      </div>
    </div>
  );
};

export default LoginPage;
