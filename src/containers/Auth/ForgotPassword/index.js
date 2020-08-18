
import React, { useState } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import AuthWrapper, { formStyles } from 'hoc/AuthWrapper';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import SendIcon from 'components/Icons/SendIcon';
import { PAGES } from 'utils/links/pages';
import { notifyError } from 'utils/notification';
import { useForm } from 'utils/hooks';

const ForgotPassword = ({ history }) => {
  const formClasses = formStyles();
  const [showForgot, setShowForgot] = useState(true);

  const submitCallback = () => {
    setShowForgot(false)
    notifyError("Forget Password");
  };

  const { inputs, inputChangeHandler, submitHandler } = useForm(submitCallback);

  return (
    <AuthWrapper smallWidth={!showForgot} history={history}>
      <form
        onSubmit={submitHandler}
        className={clsx(formClasses.form, !showForgot && formClasses.center)}>
        {
          showForgot ?
            <>
              <Typography variant='h5'>
                Forgot your password?
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                className={formClasses.topSmallSpacing}>
                If you lost your password, insert your username or your email
                address in the field below. You will receice a message with instructions.
              </Typography>
              <OutlinedTextField
                name='email'
                type='email'
                placeholder='Type in your email'
                value={inputs.email || ''}
                onChange={inputChangeHandler}
                className={formClasses.topSpacing}
                required />
              <div className={clsx(formClasses.rightAlign, formClasses.topSpacing)}>
                <ContainedButton
                  href={PAGES.SIGN_IN}
                  variant='outlined'
                  type='button'>
                  BACK
                </ContainedButton>
                <ContainedButton
                  type='submit'
                  disabled={false}>
                  SEND MESSAGE
                </ContainedButton>
              </div>
            </> :
            <>
              <SendIcon />
              <Typography
                variant='h5'
                className={formClasses.topSmallSpacing}>
                Thank you
                            </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                className={formClasses.topSmallSpacing} >
                We sent you an email with the reset link. <br />
                                Simply click on the link to reset your password.
                            </Typography>
              <div className={clsx(formClasses.oneLine, formClasses.topSpacing)}>
                <ContainedButton
                  href={PAGES.SIGN_IN}
                  type='submit'>
                  BACK TO LOGIN PAGE
                </ContainedButton>
              </div>
            </>
        }
      </form>
    </AuthWrapper>
  );
};

export default ForgotPassword;
