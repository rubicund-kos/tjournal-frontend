import {Input} from "@material-ui/core";
import classes from "./WriteForm.module.scss"
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
                placeholder={"Ваша запись"}
                defaultValue={title}
                className={classes.field}
            />
        </div>
    )
}

export default WriteForm;