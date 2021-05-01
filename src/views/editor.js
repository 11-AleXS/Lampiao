import React from 'react';

export default function Editor(){
    return(
        <div className="card">
        <button className="btn" onClick={()=>{
            electron.notificationApi.sendNotification(
                'Postando...');}}>Postar
                </button>
        </div>
    )
}