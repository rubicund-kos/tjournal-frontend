import classes from "./LeftMenu.module.scss"
import FireIcon from '@material-ui/icons/WhatshotOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import RatingIcon from '@material-ui/icons/TrendingUpOutlined';
import ListIcon from '@material-ui/icons/FormatListBulletedOutlined';
import {Button} from "@material-ui/core";
import Link from "next/link";


const menu = [
    {text: "Лента", icon: <FireIcon/>, path: "/"},
    {text: "Сообщения", icon: <MessageIcon/>, path: "/messages"},
    {text: "Рейтинг", icon: <RatingIcon/>, path: "/rating"},
    {text: "Подписки", icon: <ListIcon/>, path: "/follows"}
]

const LeftMenu: React.FC = () => {
    return (
        <nav className={classes.leftMenu}>
            <ul>
                {menu.map(({text, icon, path}) => {
                    return (
                        <li key={path}>
                            <Link href={path}>
                                <a>
                                    <Button>
                                        {icon}
                                        <span>{text}</span>
                                    </Button>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default LeftMenu;