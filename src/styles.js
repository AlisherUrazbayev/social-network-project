import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1, 0, 6)
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    buttons: {
        marginBottom: '10px'
        //paddingBottom: '40px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    
    errors: {
        color: 'red'
    }
}));

export default useStyles;