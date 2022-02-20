export const setAnswerIsHidden = (payload) => {
    console.log('action runs')
    return {
      type: 'IS_ANSWER_HIDDEN',
      payload
    }
  }

export const resetAppState = () => {
  return {
    type: 'RESET_STATE'
  }
}