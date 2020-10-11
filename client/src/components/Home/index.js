import React, { useState } from 'react';
import styles from './styles.module.css';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import empty from 'assets/img/emptyImg.png';
import point from 'assets/img/vertical_point.png';
import searchicon from 'assets/img/searchicon.png';
import filter from 'assets/img/filter.png';
import grid from 'assets/img/grid.png';
import row from 'assets/img/row.png';




function Home() {
    const [modalState, setModalState] = useState(false);
    const [contacts, setContacts] = useState([
        { name: 'Paul', job: 'CEO', decision: 'Deside', promoter: 'Promoter', level: "High", relatOwner: 'Laura' },
        { name: 'Maksim', job: 'CTO', decision: 'Deside', promoter: 'Strong Promoter', level: "Low", relatOwner: 'John' },
        { name: 'Andrey', job: 'CMO', decision: 'Agree', promoter: 'Detractor', level: "Emerging", relatOwner: 'Laura' },
        { name: 'Vadim', job: 'Accountant', decision: 'Recommend', promoter: 'Neutral', level: "Medium", relatOwner: 'John' },
    ]);
    const [isContactsTable, setIsContactsTable] = useState(true);

    if (contacts.length == 0) {
        return (
            <div className={styles.home}>
                <div className={styles.menu}>
                    <button>LogOut</button>
                </div>
                <div className={styles.main}>
                    <div className={styles.emptyContact}>
                        <h1>Power Base</h1>
                        <p>Identify the people in this account that matter</p>
                        <Button handleClick={() => { setModalState(!modalState); console.log(modalState) }} text="Add New Priority Contact" />
                    </div>
                    <img src={empty} alt="" />
                </div>

            </div>
        )
    } else {
        return (
            <div className={styles.home}>
                <div className={styles.menu}>
                    <button>LogOut</button>
                </div>
                <div className={styles.notEmptyContact}>
                    <h2>Power Base</h2>
                    <div className={styles.sort}>
                        <Input type="text" placeholder="Search" />
                        <img className={styles.searchIcon} src={searchicon} alt="" />
                        <img className={styles.filter} src={filter} alt="" />
                        <img src={row} className={styles.active} alt="" />
                        <img src={grid} alt="" />


                    </div>
                    {isContactsTable ? <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Job Title</td>
                                <td>Priority Level</td>
                                <td>Promoter/Detractor</td>
                                <td>Decision Right</td>
                                <td>Relationship Owner</td>
                                <td>PriorityTopics</td>
                                <td>&nbsp;</td>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{contact.name}</td>
                                        <td>{contact.job}</td>
                                        <td>{contact.level}</td>
                                        <td>{contact.promoter}</td>
                                        <td>{contact.decision}</td>
                                        <td>{contact.relatOwner}</td>
                                        <td>None</td>
                                        <td><img className={styles.editImg} src={point} alt="" /></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table> : <span>False</span>}
                </div>
            </div >
        )
    }

}

export default Home;