import React, { useState } from 'react'
import styles from './Notification.module.scss'
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg'

function Notification() {
    const [isNotified, setIsNotified] = useState(true);

    return (
        <div className={styles.notification}>
            {isNotified && <div className={styles.notification__new}></div>}
            <NotificationIcon />
        </div>
    )
}

export default Notification