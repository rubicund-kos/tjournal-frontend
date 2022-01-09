import classes from "./PostComments.module.scss";
import {Paper, Tab, Tabs, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Comment from "../Comment";
import React, {ChangeEvent} from "react";
import AddCommentForm from "../AddCommentForm";
import data from "./../../data"


const PostComments: React.FC = () => {

    const [activeTab, setActiveTab] = React.useState<number>(0);
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    }
    const comments = data.comments[activeTab === 0 ? "popular" : "new"];

    return (
        <Paper style={{marginTop: "20px"}}>
            <div className={"container640 pt-30"}>
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
                <AddCommentForm/>
                {comments && comments.map((obj) => {
                    return (
                        <Comment
                            key={obj.id}
                            user={obj.user}
                            text={obj.text}
                            createdAt={obj.createdAt}
                        />
                    )
                })}
            </div>


        </Paper>
    )
}

export default PostComments;