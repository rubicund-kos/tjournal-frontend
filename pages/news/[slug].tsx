import type {NextPage} from 'next'
import MainLayout from "../../components/MainLayout";
import FullPost from "../../components/FullPost";


const Home: NextPage = () => {
    return (
        <MainLayout content1020>
            <FullPost />
        </MainLayout>
    )
}

export default Home
