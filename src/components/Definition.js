import React from 'react';

const definition =  {
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A set of rules that govern how words are combined to form phrases and sentences.',
          },
          {
            definition:
              'The formal rules of formulating the statements of a computer language.',
          },
          {
            definition:
              'The study of the structure of phrases, sentences and language.',
          },
        ],
      },
    ]
  }

const Definition = () => {
    return( 
        <div>
            <h2>Definition:</h2>
            { definition.meanings[0].definitions[0].definition }
        </div>);
};

export default Definition;
