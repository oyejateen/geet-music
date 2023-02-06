import React, { useContext, useCallback } from 'react';
import {
  FormControl,
  TextField,
  Button,
  Grid,
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3';
import axios from 'axios';
import { GlobalContext } from '../GlobalState';

let captchaToken;
const FeedbackForm = () => {
  const [{}, dispatch] = useContext(GlobalContext);

  const setSnackbarMsg = React.useCallback(
    (data) => {
      dispatch({ type: 'setSnackbarMsg', snippet: data });
    },
    [dispatch]
  );
  const [isSending, setIsSending] = React.useState(false);
  const formEl = React.useRef(null);

  const submitForm = (e) => {
    // set state to sending
    setIsSending(true);
    const formData = new FormData(formEl.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    e.preventDefault();

    const post = {
      name: name,
      email: email,
      message: message,
      captcha: captchaToken,
    };

    axios
      .post('https://contact.iiiv.repl.co/contact', post)
      .then(function (response) {
        // console.log(response.data.status);
        // also clear the form
        formEl.current.reset();
        setSnackbarMsg(response.data.status);
        setIsSending(false);
      })
      .catch(function (error) {
        // // console.log(error.response.status);
        if (error.response) {
          if (error.response.status === 429) {
            formEl.current.reset();

            setSnackbarMsg('We accept limited feedback!');
          }
        }
        setIsSending(false);
      });
  };

  React.useEffect(() => {
    loadReCaptcha('6Le1toEUAAAAAITyNwqEMaz3hFAYzciSJDMomrgN');
  }, []);
const handle = () => {
    window.open("https://jatinxd.tk/message", "_blank");
  };

  const verifyCallback = (token) => {
    // // console.log(token);
    captchaToken = token;
    const captchaBox = document.querySelector('.grecaptcha-badge');
    captchaBox.remove();
    // remove captcha badge
  };

  return (
    <Grid
      required
      justify="center"
      style={{ width: '90%', maxWidth: '500px', margin: '0 auto' }}
    >
   
      <Button
        style={{ margin: '50px' }}
        variant="outlined"
        color="primary"
        onClick={handle}
        type="button"
      >Send Message</Button>
    </Grid>
  );
};

export default FeedbackForm;
