import {Avatar, Typography} from '@material-ui/core';
import classes from "./SideComments.module.scss";
import Link from "next/link";

interface CommentItemProps {
    user: {
        fullname: string,
        id: number
    },
    text: string;
    post: {
        title: string
    }
}

const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {
    return (
        <div className={classes.commentItem}>
            <div className={classes.author}>
                <Avatar className={classes.avatar}
                        variant="rounded"
                        alt={"User Avatar"}
                        src={`https://media.istockphoto.com/vectors/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-id542940816?b=1&k=20&m=542940816&s=170667a&w=0&h=pkIj97a9m65meU-iO0c98uM3WhyWGevu-CTfKKrMLW8=`}>
                </Avatar>
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.fullname}</b>
                    </a>
                </Link>


            </div>
            <Typography className={classes.commentText}>
                {text}
            </Typography>
            <a href="#">
                <small>
                    <b>{post.title}</b>
                </small>
            </a>
        </div>
    )
}

export default CommentItem;