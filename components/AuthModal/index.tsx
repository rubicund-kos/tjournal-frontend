import React from 'react';
import Image from "next/image";
import signInImg from "./../../images/signin_img.jpg";
import classes from "./AuthModal.module.scss";
import {Dialog} from "@material-ui/core";
import MainForm from "./forms/MainForm";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";


interface AuthModalProps {
    open: boolean,
    handleClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({open, handleClose}) => {

    const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.modal}>
                    <Image src={signInImg}/>
                    <div className={classes.modalContent}>
                            <div className={classes.navigationButtons}>

                                {formType === 'main' && (
                                    <CloseIcon onClick={handleClose} className={classes.closeBtn}/>
                                )}

                                {formType === ('login' || 'register') && (
                                    <span onClick={() => setFormType('main')} className={classes.backBtn}>
                                        <ArrowBackIcon/>
                                        <span>Назад</span>
                                    </span>
                                )}

                            </div>

                        {formType === 'main' && (
                            <MainForm
                                handleClose={handleClose}
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
