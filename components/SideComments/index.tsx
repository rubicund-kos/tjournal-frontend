import classes from "./SideComments.module.scss";
import ToggleIcon from '@material-ui/icons/ChevronRight';
import CommentItem from "./CommentItem";

const SideComments: React.FC = () => {
    return (
        <div className={classes.sideComments}>
            <h4 className={classes.title}>
                <span>Комментарии</span>
                <ToggleIcon/>
            </h4>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>

        </div>
    )
}

export default SideComments;