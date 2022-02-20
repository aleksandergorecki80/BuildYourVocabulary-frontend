import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAnswerIsHidden } from 'actions/definitionsActions';

const WordInput = (props) => {
  const [enteredWord, setEnteredWord] = useState('');
  const [word, setWord] = useState('');
  const [answerGiven, setAnswerGiven] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  

  useEffect(() => {
    if (props.definitionsState.data) {
      setWord(props.definitionsState.data.word);
    }
  }, [props.definitionsState.data]);

  const onKeyUphandler = (e) => {
    setEnteredWord(e.target.value);
  };

  const hanleOnSubmit = (e) => {
    e.preventDefault();

    // CHECK IF ANSWER IS CORRECT
    if(!answerGiven) {
      setAnswerGiven(true)
    }
    if(checkIfCorrect()){
      setAnswerCorrect(true);
    }

    // CLEAR INPUT
    setEnteredWord('');
  };

  const checkIfCorrect = () =>{
    return enteredWord === word;
  }

  const showTheAnswer = () => {
    props.setAnswerIsHidden(false)
  };

  return (
    <div>
      <form onSubmit={hanleOnSubmit}>
        <h4>Enter an answer</h4>
        <input
          type="text"
          placeholder="Enter an answer"
          value={enteredWord}
          onChange={onKeyUphandler}
        />
        <button>Send</button>
      </form>
      <p>{ !answerGiven ? '' : (answerCorrect ? 'CORRECT' : 'INCORRECT, try again!')}</p>
      <button onClick={showTheAnswer}>Show the answer</button>
      { !props.definitionsState.answerIsHidden && <p className='answer'>{ word.charAt(0).toUpperCase() + word.slice(1) }</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    definitionsState: state.definition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAnswerIsHidden: (payload) => {
      dispatch(setAnswerIsHidden(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);
