import {Button, Input} from "@material-ui/core";
import classes from "./WriteForm.module.scss";
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import clsx from "clsx";

interface WriteFormProps {
    title?: string
}

const WriteForm: React.FC<WriteFormProps> = ({title}) => {


    return (
        <div className={classes.writeForm}>
            <Input
                placeholder={"Заголовок"}
                defaultValue={title}
                className={clsx(classes.field, classes.fieldTitle)}
            />
            <Input
                placeholder={"Текст вашего поста"}
                defaultValue={title}
                className={clsx(classes.field, classes.fieldPost)}
                multiline
                minRows={5}
            />
            <Button variant={"contained"} color={"primary"} className={classes.writeFormBtn}>
                <MessageIcon className={"mr-10"}></MessageIcon>
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm;