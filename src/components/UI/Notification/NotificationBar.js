import React from 'react'
import './NotificationBar.scss'

const NotificationBar = (props) => {
    return (
        <div className="notificationBar"><span>{props.children}</span></div>
    )
}

export default NotificationBar
