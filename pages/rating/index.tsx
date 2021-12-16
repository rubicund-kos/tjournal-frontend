import {
    Paper,
    Tab,
    Tabs,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import React, {ChangeEvent} from "react";
import MainLayout from "../../components/MainLayout";
import classes from "./Rating.module.scss";
import FollowButton from "../../components/FollowButton";

const communityList = [
    {name: "Котомафия", rating: 180},
    {name: "Лига юмористов", rating: 150},
    {name: "Политота", rating: 132},
    {name: "Истории из жизни", rating: 111},
    {name: "IT сообщество", rating: 109},
];

const Rating = () => {

    const [activeTab, setActiveTab] = React.useState<number>(0);
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    }

    return (
        <MainLayout>
            <Paper className={classes.ratingPaper}>
                <Typography variant="h5" className={classes.ratingTitle}>Рейтинг сообществ и блогов</Typography>
                <Typography>Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
                    рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.</Typography>
                <Tabs value={activeTab}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleTabChange}>
                    <Tab label="Декабрь"/>
                    <Tab label="За 3 месяца"/>
                    <Tab label="За всё время"/>
                </Tabs>
            </Paper>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Сообщества</TableCell>
                            <TableCell align="right">Рейтинг</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {communityList.map(({name, rating}, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {index+1}.&nbsp;{name}
                                </TableCell>
                                <TableCell align="right">{rating}</TableCell>
                                <TableCell align="right">
                                    <FollowButton/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainLayout>
    )
}

export default Rating;