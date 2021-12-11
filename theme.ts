import {createTheme} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4684d9"
        }
    },
    typography: {
        h5: {
            fontSize: "1.45rem",
            lineHeight: 1.25
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontSize: "18px"
            }
        },
        MuiButton: {
            root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: "16px"
            },
            contained: {
                backgroundColor: 'white',
                boxShadow: "0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%);",
                '&:hover': {
                    backgroundColor: 'white',
                    boxShadow: "1px 3px 8px 0px rgba(34, 60, 80, 0.2);"
                }
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: '8px'
            }
        }
    }
});
export default theme;