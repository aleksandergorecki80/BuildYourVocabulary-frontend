import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchNewDefinition, resetState } from 'actions/definitionsActions';
import Definition from 'components/Definition';

// const randomWords = require('random-words');
import { rword } from 'rword';


const DefinitionList = (props) => {
  const [meanings, setMeanings] = useState([]);
  // const [ numberOfPartOfSpeach, setNumberOfPartOfSpeach ] = useState(0)

  const handleGetRandomDefinition = () => {
    props.resetState();

    //  GENERATE A RANDOM WORD
    // const randomWord = randomWords();
    const randomWord = rword.generate();;
    props.fetchNewDefinition(randomWord);
  };

  useEffect(() => {
    if (props.definitionsState.data) {
      setMeanings(props.definitionsState.data.meanings);

      // if(props.definitionData[0].meanings.length > 1){
      //   setNumberOfPartOfSpeach(props.definitionData[0].meanings.length - 1)
      // }
    }
  }, [props.definitionsState]);

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
    definitionsState: state.definition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewDefinition: (enteredWord) => {
      dispatch(fetchNewDefinition(enteredWord));
    },
    resetState: () => {
      dispatch(resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionList);
