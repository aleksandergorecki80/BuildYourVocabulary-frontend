import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchNewDefinition } from 'actions/definitionsActions';
const randomWords = require('random-words');

const Definition = (props) => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState('');

  const handleGetRandomDefinition = () => {
    const randomWord = randomWords();
    props.fetchNewDefinition(randomWord);
  };

  useEffect(() => {
    if (props.definitionData.length !== 0) {
      setWord(props.definitionData[0].word);
      setDefinitions(props.definitionData[0].meanings[0].definitions);
      setPartOfSpeech(props.definitionData[0].meanings[0].partOfSpeech);
    }
  }, [props.definitionData]);

  console.log(definitions);

  return (
    <div>
      <button onClick={handleGetRandomDefinition}>
        Get a random definition
      </button>
      <p className="part-of-speech">{partOfSpeech}</p>
      <ul>
        {definitions &&
          definitions.map((element, key) => {
            return <li key={key}> {element.definition} </li>;
          })}
      </ul>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Definition);
