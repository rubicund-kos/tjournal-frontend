import {IconButton} from "@material-ui/core";
import CommentsIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/LoopOutlined";
import FavoriteIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import classes from "./PostActions.module.scss"

const PostActions: React.FC = () => {
    return (
        <ul className={classes.postActions}>
            <li>
                <IconButton>
                    <CommentsIcon/>
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon/>
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </li>
        </ul>
    )
}
export default PostActions;