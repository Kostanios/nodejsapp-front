import React, { useEffect, useState } from 'react'
import styles from './main-page.module.css'

const MainPage = () => {
const [members, setMembers] = useState([]);
useEffect(()=>{
  fetch('http://localhost:5000/api/members').then(data => data.json()).then(membersData => setMembers(membersData))
},[])
return <div className={styles.container}>
    <header>
        <h1>ВСЕ ПОЛЬЗОВАТЕЛИ</h1>
    </header>
    <div className={styles.content}>
        {members.map((member) => {
            return <div className={member}>
                <span>{member.name}</span>
                <span>{member.old}</span>
            </div>
        })}
    </div>
</div>}

export default MainPage
