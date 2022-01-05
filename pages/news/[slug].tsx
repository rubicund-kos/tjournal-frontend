import type {NextPage} from 'next'
import MainLayout from "../../components/MainLayout";
import FullPost from "../../components/FullPost";
import React from "react";

import PostComments from "../../components/PostComments";


const Post: NextPage = () => {

    return (
        <MainLayout content1020 className={"mb-50"}>
            <FullPost />
            <PostComments/>
        </MainLayout>
    )
}

export default Post;
