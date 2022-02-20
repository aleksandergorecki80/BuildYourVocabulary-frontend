export const isAnswerHidden = (payload) => {
    console.log('action runs')
    return {
      type: 'IS_ANSWER_HIDDEN',
      payload
    }
  }

export const isAnswerGiven = (payload) => {
  return {
    type: 'IS_ANSWER_GIVEN',
    payload
  }
} 

export const setAnswerCorrect = () => {
  return {
    type: 'SET_ANSWER_CORRECT'
  }
}

export const resetAppState = () => {
  return {
    type: 'RESET_STATE'
  }
}