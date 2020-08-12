
import React from 'react';
import AuthWrapper from 'hoc/AuthWrapper';
import { authPageStyles } from 'hoc/AuthWrapper';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import LinqPalTextfield from 'components/LinqPalTextfield';
import { PAGES } from 'utils/links/pages';

const SignIn = () => {
    const classes = authPageStyles();
    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <AuthWrapper>
            <form onSubmit={submitHandler} className={classes.form}>
                <div >
                    <LinqPalTextfield label='Login' />
                    <LinqPalTextfield label='Password' type='password' />
                </div>
                <div className={classes.bottom}>
                    <ContainedButton
                        className={classes.button}
                        href={PAGES.HOME}
                        type='submit'>
                        SIGN IN
                    </ContainedButton>
                </div>
            </form>
        </AuthWrapper>
    );
};

export default SignIn;