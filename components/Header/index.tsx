import React from "react";
import classes from "./Header.module.scss"
import {Button, Box, IconButton, Avatar} from "@material-ui/core";
import Image from 'next/image';
import Logo_TJ from "../../images/TJournal_logo.svg";
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import Link from "next/link";
import AuthModal from "../AuthModal";


const Header: React.FC = () => {

    const [openAuthModal, setOpenAuthModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenAuthModal(true);
    };

    const handleClose = () => {
        setOpenAuthModal(false);
    };


    return (
        <>
            <div className={classes.header}>
                <Box className={classes.headerBlock}>
                    <IconButton>
                        <MenuIcon className={classes.headerIcon}/>
                    </IconButton>
                    <Link href="/">
                        <a><Image
                            src={Logo_TJ}
                            alt={"Logo TJournal"}
                            width={30}
                            height={50}
                        /></a>
                    </Link>
                    <Box className={classes.searchBlock}>
                        <SearchIcon/>
                        <input type="text" placeholder="Поиск"/>
                    </Box>
                    <Link href={"/write"}>
                        <a>
                            <Button variant="contained" className={classes.penButton}>
                                Новая запись
                            </Button>
                        </a>
                    </Link>

                </Box>
                <Box className={classes.headerBlock}>
                    <IconButton>
                        <MessageIcon className={classes.headerIcon}/>
                    </IconButton>
                    <IconButton>
                        <NotificationIcon className={classes.headerIcon}/>
                    </IconButton>
                    <div className={classes.loginBtn} onClick={handleClickOpen}>
                        <IconButton>
                            <UserIcon className={classes.headerIcon}/>
                            <span className={classes.loginBtnText}>Войти</span>
                        </IconButton>
                    </div>
                </Box>
            </div>
            <AuthModal open={openAuthModal} handleClose={handleClose}/>
        </>

    )

}

export default Header;