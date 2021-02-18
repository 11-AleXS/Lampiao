import React from 'react';

export default function Item(){
    return(
        <div>
        <div class="section-title">
          <h2>Aba</h2>
          <div class="underline"></div>
        </div>
        <section class="idea">
          <div class="container">
              <div class='card'>
                  <img src=''></img>
                  <h4>text on</h4>
                  <button class='btn active-btn'>click</button>
              </div>
              <div class='card'>
                  <img src=''></img>
                  <h4>text on</h4>
                  <button class='btn active-btn'>click</button>
              </div>
              <div class='card'>
                  <img src=''></img>
                  <h4>text on</h4>
                  <button class='btn active-btn'>click</button>
              </div>
              <div class='card'>
                  <img src=''></img>
                  <h4>text on</h4>
                  <button class='btn active-btn'>click</button>
              </div>
          </div>
        </section>
        <button class="btn page-btn" onClick={()=>{
            electron.notificationApi.sendNotification(
                'Iniciando o jogo!');}}>Notify
                </button>
        </div>
    )
}