import {Button, Input} from "@material-ui/core";
import classes from "./AddComentForm.module.scss"
import {useState} from "react";

const AddCommentForm: React.FC = () => {

    const [clicked, setClicked] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const onAddComment = () => {
        setClicked(false);
        setText('');
    }

    return (
        <div className={classes.form}>
            <Input
                classes={{root: classes.fieldRoot}}
                placeholder={"Написать комментарий..."}
                onFocus={() => setClicked(true)}
                minRows={clicked ? 5 : 1}
                value={text}
                onChange={handleChange}
                multiline
                fullWidth/>
            {clicked && <div className={classes.addButtonBlock}>
                <Button
                    onClick={onAddComment}
                    variant={"contained"}
                    color={"primary"}>Опубликовать</Button>
            </div>}
        </div>
    )
}

export default AddCommentForm;