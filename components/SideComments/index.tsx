import classes from "./SideComments.module.scss";
import ToggleIcon from '@material-ui/icons/ChevronRight';
import CommentItem from "./CommentItem";
import data from "./../../data"
import {useState} from "react";
import clsx from "clsx";


const SideComments: React.FC = () => {

    const [visibleComments, setVisibleComments] = useState<boolean>(true);

    const toggleVisible = () => {
        setVisibleComments(!visibleComments);
    }

    return (
        <div className={classes.sideComments}>
            <h4
                onClick={toggleVisible}
                className={clsx(classes.title, !visibleComments && classes.hideComments)}>
                <span>Комментарии</span>
                <ToggleIcon/>
            </h4>
            {visibleComments && data.comments.popular.map((item, index) => {
                return (
                    <CommentItem
                        key={item.id}
                        {...item}
                    />
                )
            })}



        </div>
    )
}

export default SideComments;