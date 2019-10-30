

export const ACTION_TYPE = "ACTION_TYPE"

export const actionCreator = (data) => ({
  type: ACTION_TYPE,
  data
})

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

//connect with 

