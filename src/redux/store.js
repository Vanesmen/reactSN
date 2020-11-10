import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer copy";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: "1", message: "Hi, how are you?", likeCount: 15 },
        { id: "2", message: "It's my first post", likeCount: 20 },
        { id: "3", message: "Doki doki!", likeCount: 200 },
      ],
      newPostText: 'Писать сюда!',
    },

    dialogsPage: {
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
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() { return this._state; },

  subscribe(observer) {
    this._callSubscriber = observer; // Патерн наблюдатель
  },

  // vvv action это объект vvv
  dispatch(action) { // {type: 'ADD-POST'}  - пример action. Свойство type обязательное!

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);

  }
}


export default store;
