import React, { useState } from "react";
import { Button, Avatar, Grid, Container, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTH } from '../../constants/actionTypes';
import {signin, signup} from '../../actions/auth';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const [formData, setFormData] = useState(initialState)
  //estas dos variables para hacer el handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    if(isSignUp) {
      dispatch(signup(formData, history))
    }else{
      dispatch(signin(formData, history))
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value })
  };
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); //para hacer el toggling!
  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  const googleSuccess = async (res) => {
    const result =  res?.profileObj; //para evitar que salga ''cannot read property...' si no existe el res
    const token =  res?.tokenId;

    try {

      dispatch({ type: AUTH, data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const googleFailure = (error) => {
    console.log("error", error);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
            <GoogleLogin
              clientId='586119212006-j3get8h3gtfqo32nbul8vop6fgpcekbl.apps.googleusercontent.com'
              render={(renderProps) => (
                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                  {" "}
                  Google Sign In
                </Button>
              )}
              onSucces={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
            />
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.button} >
              {isSignUp ? "Sign up" : "Sign In"}
            </Button>
          </Grid>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>{isSignUp ? "Already have an account? Sign in" : "Dont have an account Sign Up"}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
