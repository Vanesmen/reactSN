import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50);

function Dialogs(props) {
  
  let dialogsElements =
    props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

  let messagesElements =
    props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id}/>)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

   if (!props.isAuth) return <Redirect to={"/login"}/>


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>

    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength50]}/>
          </div>
          <div><button>Send</button></div>
        </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;