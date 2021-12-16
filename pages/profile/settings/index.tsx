import MainLayout from "../../../components/MainLayout";
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import classes from "../Profile.module.scss"

const Settings = () => {
    return (
        <MainLayout>
            <Paper style={{padding: "20px", minHeight: "300px"}}>
                <Typography variant="h6" style={{paddingBottom: "20px"}}>
                    Основные настройки
                </Typography>
                <form noValidate autoComplete="off" className={classes.settingsForm}>
                    <TextField
                        id="nickname"
                        label="Никнейм"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        label="Эл.почта"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <div>
                        <Button color={"primary"} variant="contained">
                            Сохранить изменения
                        </Button>
                    </div>

                </form>
            </Paper>
        </MainLayout>
    )
}

export default Settings;