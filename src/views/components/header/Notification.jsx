import React, { useState } from 'react'
import { ReactComponent as NotificationIcon } from 'assets/icons/notification.svg'

function Notification() {
    const [isNotified, setIsNotified] = useState(true);

    return (
        <div className="notification">
            {isNotified && <div className="notification--new"></div>}
            <NotificationIcon />
        </div>
    )
}

export default Notification