import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Image from "next/image";
import signInImg from "./../../images/signin_img.jpg";
import classes from "./SignInModal.module.scss";

interface SignInModalProps {
    open: boolean,
    handleClose: () => void
}

const SignInModal:React.FC<SignInModalProps> = ({open, handleClose}) => {

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
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </div>
                </div>

            </Dialog>
        </div>
    );
}

export default SignInModal;
