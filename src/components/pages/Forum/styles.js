import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6, 0),
        // padding: '100px 0px',

    },
    cardGrid: {
        padding: '100px 0px',

    },
    AddButton: {
        backgroundColor: '#0F8FA8 !important',
        padding: '10px 30px !important',
        justifyContent: 'center !important',
        borderRadius: '15px !important',

    },
    dropdown:{
        width:"20%",
        marginLeft:"20px"
    }

}));

export default useStyles;