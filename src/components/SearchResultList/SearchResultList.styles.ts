import { createStyles, Theme } from '@material-ui/core/styles';
import { deepOrange, yellow } from '@material-ui/core/colors';

export default (theme: Theme) =>
    createStyles({
        orangeAvatar: {
            margin: 10,
            color: '#fff',
            backgroundColor: deepOrange[500],
        },
        yellowAvatar: {
            margin: 10,
            color: '#fff',
            backgroundColor: yellow[500],
        },
        item: {
            height: 50,
        }
    });
