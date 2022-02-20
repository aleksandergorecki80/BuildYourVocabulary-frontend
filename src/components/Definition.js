const Definition = ( { meaning } ) => {
    console.log(meaning)
    return ( 
        <div>
            <p className="part-of-speech">{ meaning.partOfSpeech }</p>
            { meaning.definitions && meaning.definitions.map((element, key) => {
               return <li key={key}> { element.definition } </li>
            })}
        </div>
     );
}
 
export default Definition;