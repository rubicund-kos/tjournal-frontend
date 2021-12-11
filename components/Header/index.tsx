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


const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <Box className={classes.headerBlock}>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Image
                    src={Logo_TJ}
                    alt={"Logo TJournal"}
                    width={30}
                    height={50}
                />
                <Box className={classes.searchBlock}>
                    <SearchIcon/>
                    <input type="text" placeholder="Поиск"/>
                </Box>
                <Button variant="contained" className={classes.penButton}>
                    Новая запись
                </Button>
            </Box>
            <Box className={classes.headerBlock}>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <Avatar variant="rounded" src={"https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"}>
                    N
                </Avatar>
                <ExpandMoreIcon/>
            </Box>
        </div>
    )

}

export default Header;