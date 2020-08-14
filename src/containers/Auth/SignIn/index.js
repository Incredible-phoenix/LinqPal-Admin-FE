
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { LOGIN } from 'api/user/mutations';
import AuthWrapper, { formStyles } from 'hoc/AuthWrapper';
import Switch from 'components/UI/Switch';
import LpLink from 'components/UI/LpLink';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import { PAGES } from 'utils/links/pages';
import { useForm, useAuth } from 'utils/hooks';
import { notifyError } from 'utils/notification';

const SignIn = ({ history }) => {
    const formClasses = formStyles();
    const [remember, setRemember] = useState(false);
    const [beforeSubmit, setBeforeSubmit] = useState(true);
    const { setLoginToken } = useAuth();

    const submitCallback = () => {
        setBeforeSubmit(false);
        if (!inputs.email || !inputs.password) {
            notifyError('Please fill the required fields');
            return;
        }
        adminLogin({
            variables: {
                email: inputs.email,
                password: inputs.password,
                remember
            }
        });
    };

    const { inputs, inputChangeHandler, submitHandler } = useForm(submitCallback);
    const [adminLogin, { loading }] = useMutation(
        LOGIN,
        {
            onCompleted({ adminLogin }) {
                setLoginToken(adminLogin.token);
                history.push('/');
            },
            onError({ message }) {
                notifyError(message);
                history.push(PAGES.SIGN_IN);
            }
        }
    );

    return (
        <AuthWrapper history={history}>
            <form onSubmit={submitHandler} className={formClasses.form}>
                <Typography variant='h5'>
                    Sign In
                 </Typography>
                <OutlinedTextField
                    name='email'
                    placeholder='Email or Username'
                    value={inputs.email || ''}
                    error={!beforeSubmit && !inputs.email}
                    onChange={inputChangeHandler}
                    className={formClasses.topSpacing}
                />
                <OutlinedTextField
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={inputs.password || ''}
                    error={!beforeSubmit && !inputs.password}
                    onChange={inputChangeHandler}
                    className={formClasses.topSpacing}
                />
                <LpLink
                    className={formClasses.forgotPassword}
                    href={PAGES.FORGOT_PASSWORD}>
                    Forgot your password?
                </LpLink>
                <div className={clsx(formClasses.oneLine, formClasses.topSpacing)}>
                    <Switch
                        label='Remember Me'
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                    />
                    <ContainedButton
                        disabled={!!loading}
                        type='submit'
                        className={formClasses.button}>
                        SIGN IN
                    </ContainedButton>
                </div>
            </form>
        </AuthWrapper>
    );
};

export default SignIn;
