import Header from "../Header";
import classes from "./MainLayout.module.scss"
import LeftMenu from "../LeftMenu";
import SideComments from "../SideComments";
import clsx from "clsx";
import React from "react";

interface MainLayoutProps {
    children: React.ReactNode,
    hideMenu?: boolean,
    hideComments?: boolean,
    content960?: boolean,
    content1020?: boolean,
    className?: string
}

const MainLayout: React.FC<MainLayoutProps> =
    ({
         children,
         content960,
         content1020,
         hideComments,
         hideMenu,
         className
     }) => {
        return (
            <div className={clsx(classes.mainLayout, className)}>
                <Header/>
                <div className={classes.mainContent}>
                    {!hideMenu &&
                    <div>
                        <LeftMenu/>
                    </div>}

                    <div className={clsx(
                        classes.content, {
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