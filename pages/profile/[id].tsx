import MainLayout from "../../components/MainLayout";
import classes from "./Profile.module.scss";
import {Paper, Tabs, Tab, Typography, Box, Button} from "@material-ui/core";
import Image from 'next/image';
import profile_img from "./../../images/profile_img.jpg";
import {useState} from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import theme from "../../theme";
import Link from "next/link";

const Profile = () => {

    const [activeTab, setActiveTab] = useState<number>(0);
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue)
    }

    return (
        <MainLayout content960>
            <Paper className={classes.userBlock}>
                <Box className={classes.userInfo}>
                    <Box>
                        <Image
                            className={classes.userInfoAvatar}
                            src={profile_img}
                            width={"110px"}
                            height={"110px"}

                        />
                        <Typography variant="h4" style={{fontWeight: "bold"}}>Konstantin Web</Typography>
                        <p className={classes.userInfoText}>
                            Изменить имя или описание
                        </p>
                    </Box>
                    <Box>
                        <Link href="/profile/settings">
                            <a>
                                <Button variant="contained" className={classes.settingsButton}>
                                    <SettingsIcon/>
                                </Button>
                            </a>
                        </Link>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<MessageIcon/>}
                            style={{marginLeft: "10px"}}
                        >Написать</Button>
                    </Box>
                </Box>
                <p className={classes.userInfoText}>
                    135
                </p>
                <p className={classes.userInfoText}>
                    На проекте с 9 ноя 2021
                </p>
                <Tabs value={activeTab}
                      className={classes.userBlockTabs}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleTabChange}>
                    <Tab label="Статьи"/>
                    <Tab label="Комментарии"/>
                    <Tab label="Черновики"/>
                    <Tab label="Подробнее"/>
                </Tabs>
            </Paper>
            {activeTab === 0 &&
            <Paper className={classes.emptyArticle}>
                <p>Если у вас есть интересная идея для статьи, не стесняйтесь и скорее начинайте писать</p>
                <Button variant="contained">Создать запись</Button>

            </Paper>}


        </MainLayout>
    )
}

export default Profile;