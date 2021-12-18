import {Paper, Typography, IconButton} from "@material-ui/core";
import Image from "next/image";
import classes from "./Post.module.scss";
import Link from "next/link";
import PostActions from "../PostActions";

const Post: React.FC = () => {
    return (
        <>
            <Paper elevation={0} className={classes.post}>
                <Typography variant="h5" className={classes.title}>
                    <Link href={"/news/test-123"}>
                        <a>
                            История Crazy Frog: как mp3-звук с имитацией двигателя мопеда превратился в назойливый
                            рингтон и повлиял на поп-культуру
                        </a>
                    </Link>

                </Typography>
                <Typography style={{margin: "15px 0"}}>
                    Символ «эпохи кнопочных телефонов» возвращается, а вместе с ним — воспоминания о
                    раздражающей мелодии, звучавшей отовсюду.
                    В 2021 году многое возвращается: не стал исключением и Crazy Frog — персонаж, выглядящий как
                    синий лягушонок, в нулевые «исполнявший» электронные ремиксы на популярные треки. 10 декабря
                    выйдет новый сингл, представляющий из себя мэшап классических хитов. TJ вспоминает историю
                    «лягушонка», появившегося из записи с имитацией звука двигателя в 90-е.
                </Typography>
                <Image
                    src={"https://leonardo.osnova.io/09fb12e3-465d-58b6-8322-4a8f5f7f611d/"}
                    width={640}
                    height={355}
                />
                <PostActions/>
            </Paper>

        </>
    )
}

export default Post;