import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isAnswerHidden, isAnswerGiven, setAnswerCorrect } from 'actions/appStateActions';

const WordInput = (props) => {
  const [enteredWord, setEnteredWord] = useState('');
  const [word, setWord] = useState('');
 
  
  useEffect(() => {
    if (props.definitionData) {
      setWord(props.definitionData.word);
    }
  }, [props.definitionData]);

  const onKeyUphandler = (e) => {
    setEnteredWord(e.target.value);
  };

  const hanleOnSubmit = (e) => {
    e.preventDefault();

    // CHECK IF ANSWER IS CORRECT
    if(!props.appState.answerGiven) {
      props.isAnswerGiven(true)
    }
    if(checkIfCorrect()){
      props.setAnswerCorrect();
    }

    // CLEAR INPUT
    setEnteredWord('');
  };

  const checkIfCorrect = () =>{
    return enteredWord === word;
  }

  const showTheAnswer = () => {
    props.isAnswerHidden(false)
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
      <p>{ !props.appState.answerGiven ? '' : (props.appState.answerCorrect ? 'CORRECT' : 'INCORRECT, try again!')}</p>
      {!props.appState.answerCorrect && <button onClick={showTheAnswer}>Show the answer</button>}
      { !props.appState.answerIsHidden && <p className='answer'>{ word.charAt(0).toUpperCase() + word.slice(1) }</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    definitionData: state.definition,
    appState: state.appState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAnswerHidden: (payload) => {
      dispatch(isAnswerHidden(payload))
    },
    isAnswerGiven: (payload) => {
      dispatch(isAnswerGiven(payload))
    },
    setAnswerCorrect: (payload) => {
      dispatch(setAnswerCorrect(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);
