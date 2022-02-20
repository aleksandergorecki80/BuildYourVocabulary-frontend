import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAnswerIsHidden } from 'actions/definitionsActions';

const WordInput = (props) => {
  const [enteredWord, setEnteredWord] = useState('');
  const [word, setWord] = useState('');
  

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
    setEnteredWord('');
  };

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
