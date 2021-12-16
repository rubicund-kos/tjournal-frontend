import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import {Button} from "@material-ui/core";
import React from "react";
import CheckSuccessIcon from '@material-ui/icons/CheckOutlined';
import classes from "./FollowButton.module.scss"

const FollowButton = () => {

    const [followed, setFollowed] = React.useState<boolean>(false)

    return (
        <Button
            variant="contained"
            className={classes.followButton}
            onClick={() => setFollowed(!followed)}
        >
            {!followed ? <PersonAddIcon/> : <CheckSuccessIcon className={classes.successIcon}/>}

        </Button>
    )
}
export default FollowButton;