import React from 'react';

const solution = {
  word: 'syntax',
  phonetic: '/ˈsɪn.tæks/',
  phonetics: [
    {
      text: '/ˈsɪn.tæks/',
      audio:
        'https://api.dictionaryapi.dev/media/pronunciations/en/syntax-uk.mp3',
      sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=89034015',
      license: {
        name: 'BY-SA 4.0',
        url: 'https://creativecommons.org/licenses/by-sa/4.0',
      },
    },
  ],
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
  ],
  license: {
    name: 'CC BY-SA 3.0',
    url: 'https://creativecommons.org/licenses/by-sa/3.0',
  },
  sourceUrls: ['https://en.wiktionary.org/wiki/syntax'],
};

const Solution = () => {
  return (
    <div>
        <strong>{solution.word.charAt(0).toUpperCase() + solution.word.slice(1)}</strong> - {solution.meanings[0].definitions[0].definition}
    </div>
    );
};

export default Solution;
