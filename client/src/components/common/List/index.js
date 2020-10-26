import React from 'react';
import Contact from 'components/common/Contact';
import styles from './styles.module.css';
// import point from 'assets/img/vertical_point.png';

function List({contacts,searchValue,openDetailsHandler}){

    const priorityList = new Set();
    let lastPriority = null;
    // const contactsList = [];

    contacts.map((contact)=>{
        if(contact.level !== lastPriority){
            priorityList.add(
                contact.level
            )
            lastPriority = contact.level;
        }
    });
    let priorityArray =[...priorityList];

    return(
        <div className={styles.list}>
                {
                    priorityArray.map((priority)=>{
                        return(
                            <div key={priority} className={styles.priorityBlock}>
                                 <h2>{priority} Priority</h2>
                                 <div className={styles.contacts}>
                                        {contacts.map((contact)=>{
                                            if(contact.name.indexOf(searchValue)===-1 && searchValue){
                                                return
                                            }
                                            else if(contact.level === priority){
                                                    return (
                                                        <Contact 
                                                            openDetailsHandler={openDetailsHandler}
                                                            key={contact.id} 
                                                            contact ={contact}
                                                        />
                                                    );
                                            }
                                        })}
                                 </div>
                            </div>    
                        )
                    })
                }
        </div>
    )
}

export default List;