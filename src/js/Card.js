import React from 'react';

export default function Card(){
    return(
        <div className="card">
            <img src='../img/'></img>
            <div className="content">
                <h3>The Candle Curse</h3>
                <button onClick={()=>{
                    electron.notificationApi.sendNotification(
                        'Iniciando o jogo!');}}>Jogar</button>
            </div>
        </div>
    )
}