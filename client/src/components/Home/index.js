import React, { useState } from 'react';
import styles from './styles.module.css';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import empty from 'assets/img/emptyImg.png';

function Home(){
    const [modalState,setModalState] = useState(false);

    return (
        <div className={styles.home}>
            <div className={styles.menu}>
                <button>LogOut</button>
            </div>
            <div className={styles.main}>
                <div className={styles.emptyContact}>
                    <h1>Power Base</h1>
                    <p>Identify the people in this account that matter</p>
                    <Button handleClick={()=>{setModalState(!modalState);console.log(modalState)}} text="Add New Priority Contact"/>
                </div>
                <img src={empty} alt=""/>
            </div>

        </div>
    )
}

export default Home;