import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {
  
  let dialogsElements =
    props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

  let messagesElements =
    props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id}/>)

  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
    // let action = sendMessageCreator();
    // props.dispatch(action);

  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
    // let action = updateNewMessageBodyCreator(body);
    // props.dispatch(action);
   }


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"></textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;