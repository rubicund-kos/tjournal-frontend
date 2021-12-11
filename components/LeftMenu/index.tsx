import classes from "./LeftMenu.module.scss"
import FireIcon from '@material-ui/icons/WhatshotOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import RatingIcon from '@material-ui/icons/TrendingUpOutlined';
import ListIcon from '@material-ui/icons/FormatListBulletedOutlined';
import {Button} from "@material-ui/core";

const LeftMenu:React.FC = () => {
    return (
        <nav className={classes.leftMenu}>
            <ul>
                <li>
                    <Button>
                        <FireIcon/>
                        <span>Лента</span>
                    </Button>
                </li>
                <li>
                    <Button>
                        <MessageIcon/>
                        <span>Сообщения</span>
                    </Button>
                </li>
                <li>

                    <Button>
                        <RatingIcon/>
                        <span>Рейтинг</span>
                    </Button>
                </li>
                <li>

                    <Button>
                        <ListIcon/>
                        <span>Подписки</span>
                    </Button>
                </li>
            </ul>

        </nav>
    )
}

export default LeftMenu;