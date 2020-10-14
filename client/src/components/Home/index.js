import React, { useState } from 'react';
import styles from './styles.module.css';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Table from 'components/common/Table';
import List from 'components/common/List';
import Modal from 'components/common/Modal';
import empty from 'assets/img/emptyImg.png';
import point from 'assets/img/vertical_point.png';
import searchicon from 'assets/img/searchicon.png';
import filter from 'assets/img/filter.png';
import grid from 'assets/img/grid.png';
import row from 'assets/img/row.png';
import { ReactComponent as OkIcon } from 'assets/img/ok.svg';





function Home({ contacts }) {
    const [modalState, setModalState] = useState(false);
    const [isContactsTable, setIsContactsTable] = useState(true);

    const showTable = (target) => {
        setIsContactsTable(true);
    }
    const showList = (target) => {
        setIsContactsTable(false);
    }
    let activeTable;
    let activeList;

    isContactsTable ? (activeTable = {
        background: '#efefef'
    }) :
        (activeList = {
            background: '#efefef'
        });

    let searchInputHandler = () => {

    }

    return (
        <div className={styles.home}>
            <div className={styles.menu}>
                <button>LogOut</button>
                {/* <OkIcon /> */}
            </div>

            {
                modalState?<Modal closeModal={()=>setModalState(false)}/>:null
            }


            {
                (contacts.length === 0) ?
                    <div className={styles.main}>
                        <div className={styles.emptyContact}>
                            <h1>Power Base</h1>
                            <p>Identify the people in this account that matter</p>
                            <Button handleClick={() => { setModalState(!modalState) }} text="Add New Priority Contact" />
                        </div>
                        <img src={empty} alt="" />
                    </div> :
                    <div className={styles.notEmptyContact}>
                        <h2>Power Base</h2>
                        <div className={styles.actionRow}>
                            <div className={styles.sort}>
                                <Input type="text" placeholder="Search" onChange={(e) => searchInputHandler(e.target.value)} />
                                <img className={styles.searchIcon} src={searchicon} alt="" />
                                <img className={styles.filter} src={filter} alt="" />
                                <img onClick={(e) => showTable(e.target)} className={isContactsTable ? styles.active : styles.notActive} src={row} style={activeTable} alt="" />
                                <img onClick={(e) => showList(e.target)} src={grid} style={activeList} alt="" />
                            </div>
                            <Button handleClick={() => { setModalState(!modalState) }} text="Add New Priority Contact"/>
                        </div>
                        
                        {isContactsTable ? <Table contacts={contacts} /> : <List contacts={contacts} />}
                    </div>
            }
        </div>
    )
}

export default Home;