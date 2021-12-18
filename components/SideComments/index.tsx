import classes from "./SideComments.module.scss";
import ToggleIcon from '@material-ui/icons/ChevronRight';
import CommentItem from "./CommentItem";

const items = [
    {
        user: {
            fullname: 'Мария Николаева',
            id: 1
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            fullname: 'Мария Николаева',
            id: 1
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            fullname: 'Мария Николаева',
            id: 1
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
];


const SideComments: React.FC = () => {
    return (
        <div className={classes.sideComments}>
            <h4 className={classes.title}>
                <span>Комментарии</span>
                <ToggleIcon/>
            </h4>
            {items.map((item) => {
                return (
                    <CommentItem
                        user={item.user}
                        text={item.text}
                        post={item.post}
                    />
                )
            })}



        </div>
    )
}

export default SideComments;