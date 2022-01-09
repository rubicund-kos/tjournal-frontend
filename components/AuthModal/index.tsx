import React from 'react';
import Image from "next/image";
import signInImg from "./../../images/signin_img.jpg";
import classes from "./AuthModal.module.scss";
import {Button, Dialog, TextField} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import mailIcon from "../../images/social_img/mail.svg";
import googleIcon from "../../images/social_img/google.svg";
import facebookIcon from "../../images/social_img/facebook.svg";
import MainForm from "./forms/MainForm";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";


interface AuthModalProps {
    open: boolean,
    handleCloseModal: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({open, handleCloseModal}) => {

    const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.modal}>
                    <Image src={signInImg}/>
                    <div className={classes.modalContent}>
                        {formType === 'main' && (
                            <MainForm
                                handleCloseModal={handleCloseModal}
                                openLoginForm={() => setFormType('login')}/>
                        )}
                        {formType === 'login' && (
                            <LoginForm
                                openMainForm={() => setFormType('main')}
                                openRegisterForm={() => setFormType('register')}
                            />
                        )}
                        {formType === 'register' && (
                            <RegisterForm
                                openMainForm={() => setFormType('main')}
                            />
                        )}
                    </div>
                </div>

            </Dialog>
        </div>
    );
}

export default AuthModal;
