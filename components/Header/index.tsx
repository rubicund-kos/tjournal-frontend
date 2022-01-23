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
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/user";


const Header: React.FC = () => {

    // Примечание работы этой функции, написано в redux/hook.ts. В данном контексте он вернет нам данные
    // type ResponseAuthUser
    const userData = useAppSelector(selectUserData);

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
                    <div className={classes.searchBlock}>
                        <SearchIcon/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
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
                        {userData
                            ? <Link href={"profile/1"}>
                                <a>
                                    <Avatar
                                        className={"avatar"}
                                        alt="Вася Пупкин"
                                        src="https://leonardo.osnova.io/8806b720-afb7-5d71-89b1-4c4332010b71/-/scale_crop/64x64/"/>
                                </a>
                            </Link>

                            : <IconButton>
                                <UserIcon className={classes.headerIcon}/>
                                <span className={classes.loginBtnText}>Войти</span>
                            </IconButton>
                        }
                    </div>
                </Box>
            </div>
            <AuthModal open={openAuthModal} handleClose={handleClose}/>
        </>

    )

}

export default Header;