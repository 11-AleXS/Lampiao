import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './views/chat';
import '../assets/scss/index.scss';

function Bundle(){
    return(
        <>
            <Chat/>
        </>
    )
}

ReactDOM.render(<Bundle />,document.getElementById('root'))