import Header from "../Header";
import classes from "./MainLayout.module.scss"
import LeftMenu from "../LeftMenu";
import SideComments from "../SideComments";
import clsx from "clsx";

interface MainLayoutProps {
    children: React.ReactNode,
    hideComments?: boolean | undefined,
    content960?: boolean | undefined,
    content1020?: boolean | undefined
}

const MainLayout: React.FC<MainLayoutProps> =
    ({
         children,
         content960,
         content1020,
         hideComments
     }) => {
        return (
            <div className={classes.mainLayout}>
                <Header/>
                <div className={classes.mainContent}>
                    <div>
                        <LeftMenu/>
                    </div>
                    <div className={clsx(
                        classes.content,{
                            [classes.content960]: content960,
                            [classes.content1020]: content1020
                        })}>
                        {children}
                    </div>
                    {!hideComments &&
                    <div>
                        <SideComments/>
                    </div>
                    }


                </div>
            </div>

        )
    }

export default MainLayout;