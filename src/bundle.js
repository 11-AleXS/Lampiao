import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './views/editor';
import '../assets/scss/index.scss';

function Bundle(){
  return(
    <>
      <Editor/>
    </>
  )
}

ReactDOM.render(<Bundle />,document.getElementById('root'));