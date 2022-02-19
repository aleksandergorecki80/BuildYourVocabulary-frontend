import { connect } from 'react-redux';
import { fetchNewDefinition } from 'actions/definitionsActions';
const randomWords = require('random-words');




const Definition = (props) => {
  // const [ randomWord, setRandomWord ] = useState('')
  
  const handleGetRandomDefinition = () => {
    const randomWord = randomWords();
    props.fetchNewDefinition(randomWord);
    console.log(`Curent redux state: ${props.definition}`)  
  }

    return( 
        <div>
            <h2>Definition:</h2>
            <button onClick={handleGetRandomDefinition}>Get a random definition</button>
        </div>);
};

const mapStateToProps = (state) => {
  return {
    definition: state.definition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewDefinition: (enteredWord) => {
      dispatch(fetchNewDefinition(enteredWord))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Definition);
