import {Avatar, Typography} from '@material-ui/core';
import classes from "./SideComments.module.scss"

const CommentItem: React.FC = () => {
    return (
        <div className={classes.commentItem}>
            <div className={classes.author}>
                <Avatar className={classes.avatar}
                        variant="rounded"
                        alt={"User Avatar"}
                        src={`https://media.istockphoto.com/vectors/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-id542940816?b=1&k=20&m=542940816&s=170667a&w=0&h=pkIj97a9m65meU-iO0c98uM3WhyWGevu-CTfKKrMLW8=`}>
                </Avatar>
                <Typography>Анжелина Джоли</Typography>
            </div>
            <Typography className={classes.commentText}>
                Питера Макиндо «воспитал интернет», где любая безумная теория может найти последователей. Теперь он
                ездит по стране с рассказами о птицах-дронах, превратив шутку в социальный эксперимент.
            </Typography>
        </div>
    )
}

export default CommentItem;