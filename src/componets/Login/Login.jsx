import React from "react";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from 'react-redux';
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import style from "./../common/FormsControls/FormsControls.module.css";
const maxLength50 = maxLengthCreator(50)


const LoginForm = ({handleSubmit, error}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} placeholder={"Email"} name={"email"} validate={[required, maxLength50]}/>
            </div>
            <div>
                <Field component={Input} placeholder={"Password"} name={"password"} validate={[required]} type="password"/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"} />
                Remeber me
            </div>
            {
                error && <div className={style.form_summary_error}>{error}</div>
            }
            
            <div>
                <button>Login</button>                
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const submit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={submit}/>   
    </div>
}


let mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {login, logout})(Login)