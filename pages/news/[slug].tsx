import type {NextPage} from 'next'
import MainLayout from "../../components/MainLayout";
import FullPost from "../../components/FullPost";
import {Paper, Tab, Tabs, Typography} from "@material-ui/core"
import React, {ChangeEvent} from "react";
import classes from "./News.module.scss";
import Divider from '@material-ui/core/Divider';
import PostComment from "../../components/PostComment";


const Home: NextPage = () => {

    const [activeTab, setActiveTab] = React.useState<number>(0);
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    }


    return (
        <MainLayout content1020 className={"mb-50"}>
            <FullPost />

            <Paper style={{marginTop: "20px"}}>
                <div className={classes.commentsBlock}>
                    <Typography className={classes.commentsCounter}>
                        <b>42 комментария</b>
                    </Typography>
                    <Tabs value={activeTab}
                          onChange={handleTabChange}
                          indicatorColor="primary"
                          textColor="primary">
                        <Tab label="Популярные"/>
                        <Tab label="По порядку"/>
                    </Tabs>
                    <Divider/>
                    <PostComment/>
                    <PostComment/>
                    <PostComment/>
                </div>



            </Paper>
        </MainLayout>
    )
}

export default Home
