import React from 'react';

export default function Chat(){
    return(
        <div>
        <button class="btn page-btn" onClick={()=>{
            electron.notificationApi.sendNotification(
                'Test!');}}>Notify
                </button>
        </div>
    )
}