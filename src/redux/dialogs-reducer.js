const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How are you" },
    { id: "3", message: "Hello dude" },
  ],

  dialogsData: [
    { id: "1", name: "Ivan G" },
    { id: "2", name: "Misha P" },
    { id: "3", name: "Sveta I" },
    { id: "4", name: "Kostya D" },
    { id: "5", name: "Masha K" },
    { id: "6", name: "Sergay J" },
  ],
  newMessageBody: "",
}


const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: "4", message: body }]
      };
      
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;