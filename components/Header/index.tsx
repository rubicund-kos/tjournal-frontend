import React from "react";
import classes from "./Header.module.scss"
import {Button, Box, IconButton, Avatar} from "@material-ui/core";
import Image from 'next/image';
import Logo_TJ from "../../images/TJournal_logo.svg";
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "next/link";


const Header: React.FC = () => {
    return (
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
                <IconButton >
                    <MessageIcon className={classes.headerIcon}/>
                </IconButton>
                <IconButton>
                    <NotificationIcon className={classes.headerIcon}/>
                </IconButton>
                <IconButton>
                    <Link href="/profile/1">
                        <a className={"d-flex"}>
                            <Avatar variant="rounded" src={"https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"}>
                                N
                            </Avatar>
                            <ExpandMoreIcon/>
                        </a>
                    </Link>

                </IconButton>
            </Box>
        </div>
    )

}

export default Header;