import React, {ChangeEvent} from "react";
import classes from "./PostComment.module.scss"
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import MoreIcon from '@material-ui/icons/MoreHoriz';


interface PostCommentProps {
    user?: {
        fullname: string
    };
    text?: string,
    post?: {
        title: string
    }
}

const PostComment: React.FC<PostCommentProps> = ({user, text}) => {

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
                    <Avatar alt="Remy Sharp"
                            src="https://leonardo.osnova.io/20b12798-c1b3-5f2d-8c30-7af62570f29b/-/scale_crop/64x64/"
                            className={classes.postCommentAvatar}
                    />
                    <div className={classes.postCommentDescription}>
                        <b>Chick</b>
                        <small className={classes.postCommentTime}>5 часов</small>
                    </div>
                </div>
                <div>
                    <p>Если бы у бабушки были колёса и звалась бы она Аннушкой, то это был бы трамвай, а не бабушка. Если
                        бы...</p>
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

export default PostComment;