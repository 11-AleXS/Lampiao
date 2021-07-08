import React from 'react';

export default function Editor()
{
  return(
    <div>
      <button onClick={()=>{
        electron.notificationApi.sendNotification(
        'Postando...')}}>
        Procurar
      </button>
    </div>
  )
}