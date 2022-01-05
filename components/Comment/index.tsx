import React, {ChangeEvent} from "react";
import classes from "./PostComment.module.scss"
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import MoreIcon from '@material-ui/icons/MoreHoriz';


interface CommentProps {
    user: {
        fullname: string,
        avatarUrl: string
    };
    text: string,
    createdAt: string
}

const Comment: React.FC<CommentProps> = ({user, text, createdAt}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{marginTop: "30px"}}>
            <div className={classes.postComment}>
                <div className={classes.postCommentUser}>
                    <Avatar alt={user.fullname}
                            src={user.avatarUrl}
                            className={classes.postCommentAvatar}
                    />
                    <div className={classes.postCommentDescription}>
                        <b>{user.fullname}</b>
                        <small className={classes.postCommentTime}>{createdAt}</small>
                    </div>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
            <span className={classes.answerBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
            </Menu>
        </div>

    )
}

export default Comment;