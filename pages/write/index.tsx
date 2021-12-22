import MainLayout from "../../components/MainLayout";
import {NextPage} from "next";
import WriteForm from "../../components/WriteForm";

const Write: NextPage = () => {
    return (
        <MainLayout hideComments hideMenu className={"bgc-white"}>
            <WriteForm/>
        </MainLayout>
    )
}

export default Write;