import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        width: "418px",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // margin: '100px',
        marginTop: '20px',
    },
    cardMedia: {
        paddingTop: '46.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,

    },
    cardGridItem: {
        width: "418px",
        // paddingLeft: '100px',
        paddingRight: '40px',
        paddingTop: '40px !important',
    },
    buttonGroups: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    greyButton: {
        backgroundColor: '#424242 !important',
    },
    paymentLabel: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "1.2",
        color: "#212529",
        padding: '5px',
        backgroundColor: '#E0E0E0',
        borderRadius: '5px',
        width: "fit-content",
        marginBottom: '10px',
    },
    paymentLabelEnabled: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "1.2",
        color: "#212529",
        padding: '5px',
        backgroundColor: 'rgb(242, 244, 246, 1)',
        borderRadius: '5px',
        width: "fit-content",
        color: '#0F8FA8',
        marginBottom: '24px !important',

    },
    tags: {
        backgroundColor: '#0F8FA8',
        color: '#fff',
        borderRadius: '20px',
        padding: '5px',
        fontSize: "14px",
        width: "fit-content",

    },
    formbody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '60%',
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        padding: '20px',
    },

}));

export default useStyles;