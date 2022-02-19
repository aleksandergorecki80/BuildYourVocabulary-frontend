import React, { useState } from 'react';

const WordInput = (props) => {
  const [enteredWord, setEnteredWord] = useState('');

  const onKeyUphandler = (e) => {
    setEnteredWord(e.target.value);
  };

  const hanleOnSubmit = (e) => {
    e.preventDefault();
    

    //
    // Use redux
    //
    setEnteredWord('');
  };

  return (
    <form onSubmit={hanleOnSubmit}>
      <h4>Enter an answer</h4>
      <input
        type="text"
        placeholder="Enter an answer"
        value={enteredWord}
        onChange={onKeyUphandler}
      />
      <button>Send</button>
      <button>Show the answer</button>
    </form>
  );
};



export default WordInput;
