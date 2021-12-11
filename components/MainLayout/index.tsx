import Header from "../Header";
import classes from "./MainLayout.module.scss"
import LeftMenu from "../LeftMenu";
import SideComments from "../SideComments";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC = ({children}) => {
    return (
        <div className={classes.mainLayout}>
            <Header/>
            <div className={classes.mainContent}>
                <div>
                    <LeftMenu/>
                </div>
                <div className={classes.content}>
                    {children}
                </div>
                <div>
                    <SideComments/>
                </div>

            </div>
        </div>

    )
}

export default MainLayout;