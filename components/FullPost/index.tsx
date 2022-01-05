import classes from "./FullPost.module.scss";
import {Paper, Typography, Button} from "@material-ui/core";
import Image from "next/image";
import PostActions from "../PostActions";
import profile_img from "./../../images/profile_img.jpg";
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

const FullPost = () => {
    return (
        <Paper elevation={0} className={classes.paper}>
            <div className={"container640"}>
                <Typography variant={"h4"} className={classes.paperTitle}>Исследователи обнаружили крупные запасы воды в
                    системе каньонов Марса</Typography>
                <Typography>Скопление ценного ресурса в низких широтах открывает перспективы для потенциальных
                    экспедиций.</Typography>
                <Image
                    src={"https://leonardo.osnova.io/063f07f6-3269-5d31-8054-aa6763c7598a/"}
                    width={"1020px"}
                    height={"600px"}
                    className={classes.paperImg}
                />
                <Typography>Орбитальный аппарат Trace Gas Orbiter (TGO) в рамках программы «ЭкзоМарс» Европейского
                    космического агентства и «Роскосмоса» обнаружил обширные запасы воды в долинах Маринера — самом
                    большом известном каньоне в Солнечной системе.</Typography>
                <Typography>Открытие удалось совершить благодаря детектору эпитепловых нейтронов FREND, который
                    анализирует содержание водорода в слое марсианского грунта на глубине до одного метра.</Typography>
                <Typography>Ранее астрономы уже находили воду на Марсе, но преимущественно в холодных полярных регионах
                    и в виде льда. Система каньонов же простирается на более чем 4000 километров вдоль экватора
                    планеты.</Typography>
                <Typography>По словам ведущего научного сотрудника Игоря Митрофанова, молекулы воды составляют около 40%
                    от приповерхностых пород в зоне «Кандор Хаос», а глубже могут находиться богатые
                    «оазисы».</Typography>
                <Image
                    src={"https://leonardo.osnova.io/ab8e63e4-ee57-54d1-8ccb-b9be0ac26f58/"}
                    width={"1020px"}
                    height={"600px"}
                    className={classes.paperImg}
                />
                <Typography>Учёным ещё предстоит определить точный состав и форму воды, но сам факт скопления ценного
                    ресурса в низких широтах открывает новые перспективы для исследований и экспедиций.</Typography>
                <Typography>Зонд TGO находится на орбите с 2016 года, а в 2022-м к научной миссии присоединятся
                    европейский марсоход «Розалинда Франклин» и российская посадочная платформа «Казачок» — они будут
                    выяснять, существовала ли когда-либо жизнь на Марсе.</Typography>
                <div className={classes.postActionsLine}>
                    <PostActions/>
                </div>
                <div className={classes.userLine}>
                    <div className={classes.userInfo}>
                        <Image
                            src={profile_img}
                            alt="Аватар"
                            width={40}
                            height={40}
                            className={classes.userAvatar}
                        />
                        <b>Анжелина Джоли</b>
                        <span className={classes.userRating}>+159</span>
                    </div>
                    <div className={classes.userButtons}>
                        <Button variant={"contained"} className={classes.messageButton}>
                            <MessageIcon/>
                        </Button>
                        <Button
                            variant={"contained"}>
                            <UserAddIcon />
                            &nbsp;Подписаться
                        </Button>
                    </div>
                </div>

            </div>
        </Paper>
    )
}

export default FullPost;