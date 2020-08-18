
import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import AuthWrapper, { formStyles } from 'hoc/AuthWrapper';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import { PAGES } from 'utils/links/pages';
import { validatePassword } from 'utils/validators';
import { notifyError } from 'utils/notification';
import { useForm } from 'utils/hooks';

const ResetPassword = ({ match, history }) => {
  const formClasses = formStyles();

  const submitCallback = () => {
    const passwordCheck = validatePassword(inputs.password || '');
    if (passwordCheck) {
      notifyError(passwordCheck);
      return null;
    }
    if (inputs.password !== inputs.confirmPassword) {
      notifyError('Confirm Password is not correct.');
      return null;
    }

  };

  const { inputs, inputChangeHandler, submitHandler } = useForm(submitCallback);


  return (
    <AuthWrapper history={history}>
      <form
        onSubmit={submitHandler}
        className={formClasses.form}>
        <Typography variant='h5'>
          Reset Password
        </Typography>
        <OutlinedTextField
          // error={(inputs.password && passwordCheck)}
          type='password'
          name='password'
          placeholder='Password (6 or more characters)'
          value={inputs.password || ''}
          onChange={inputChangeHandler}
          className={formClasses.topSpacing}
        />
        <OutlinedTextField
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={inputs.confirmPassword || ''}
          onChange={inputChangeHandler}
          className={formClasses.topSpacing}
        />
        <div className={clsx(formClasses.rightAlign, formClasses.topSpacing)}>
          <ContainedButton
            href={PAGES.SIGN_IN}
            variant='outlined'
            type='button'>
            BACK
          </ContainedButton>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
