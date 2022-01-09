import classes from "../AuthModal.module.scss";
import Image from "next/image";
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import mailIcon from "../../../images/social_img/mail.svg";
import googleIcon from "../../../images/social_img/google.svg";
import facebookIcon from "../../../images/social_img/facebook.svg";
import React from "react";

interface MainFormProps {
    openLoginForm: () => void;
    handleClose: () => void;
}

const MainForm: React.FC<MainFormProps> = ({openLoginForm}) => {
    return (
        <>
            <div className={classes.modalContainer}>
                <h2>Вход в TJ</h2>
                <Button
                    onClick={openLoginForm}
                    variant="contained"
                    fullWidth
                    className={classes.socialBtn}>
                    <span className={classes.socialBtnText}>Почта</span>
                    <span className={classes.socialBtnIcon}>
                        <Image
                            src={mailIcon}
                            height={"22px"}
                            width={"25px"}
                        />
                    </span>
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    className={classes.socialBtn}>
                    <span className={classes.socialBtnText}>Google</span>
                    <span className={classes.socialBtnIcon}>
                                    <Image
                                        src={googleIcon}
                                        height={"22px"}
                                        width={"25px"}
                                    />
                                </span>
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    className={classes.socialBtn}>
                    <span className={classes.socialBtnText}>Facebook</span>
                    <span className={classes.socialBtnIcon}>
                        <Image
                            src={facebookIcon}
                            height={"22px"}
                            width={"25px"}
                        />
                    </span>
                </Button>
            </div>
        </>
    )
}

export default MainForm;