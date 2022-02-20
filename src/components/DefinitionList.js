// import { rword } from 'rword';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchNewDefinition, resetDefinitionState } from 'actions/definitionsActions';
import { resetAppState } from 'actions/appStateActions';
import Definition from 'components/Definition';

// const randomWords = require('random-words');
const randomWords = require('random-english-words');


const DefinitionList = (props) => {
  const [meanings, setMeanings] = useState([]);
  // const [ numberOfPartOfSpeach, setNumberOfPartOfSpeach ] = useState(0)

  const handleGetRandomDefinition = () => {
    props.resetDefinitionState();
    props.resetAppState();
    //  GENERATE A RANDOM WORD
    const randomWord = randomWords();
    // const randomWord = rword.generate();
    props.fetchNewDefinition(randomWord);
  };

  useEffect(() => {
    if (props.definitionData) {
      setMeanings(props.definitionData.meanings);

      // if(props.definitionData[0].meanings.length > 1){
      //   setNumberOfPartOfSpeach(props.definitionData[0].meanings.length - 1)
      // }
    }
  }, [props.definitionData]);

  return (
    <div>
      <button onClick={handleGetRandomDefinition}>
        Get a random definition
      </button>
      {meanings &&
        meanings.map((meaning, key) => {
          return (
            <div key={key}>
              {' '}
              <Definition meaning={meaning} />{' '}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    definitionData: state.definition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewDefinition: (enteredWord) => {
      dispatch(fetchNewDefinition(enteredWord));
    },
    resetDefinitionState: () => {
      dispatch(resetDefinitionState());
    },
    resetAppState: () => {
      dispatch(resetAppState());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionList);
