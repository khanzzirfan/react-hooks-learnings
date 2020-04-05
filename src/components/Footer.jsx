import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from './Link';
import { VisibilityFilters } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    '& .MuiButton-outlinedSecondary:nth-of-type(1)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& .MuiButton-outlinedSecondary:nth-of-type(2)': {
      borderRadius: 0,
    },
    '& .MuiButton-outlinedSecondary:last-child': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  buttonGroup: {
    marginLeft: theme.spacing(2),
  },
}));

const Footer = ({ onClick, visibilityFilter }) => {
  const classes = useStyles();
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;
  return (
    <div className={classes.root}>
      <Typography variant="body1" component="p" gutterBottom color="primary">
        Show
      </Typography>
      <ButtonGroup
        className={classes.buttonGroup}
        color="secondary"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Link onClick={() => onClick(SHOW_ALL)} active={visibilityFilter === SHOW_ALL}>
          All
        </Link>
        <Link onClick={() => onClick(SHOW_ACTIVE)} active={visibilityFilter === SHOW_ACTIVE}>
          Active
        </Link>
        <Link onClick={() => onClick(SHOW_COMPLETED)} active={visibilityFilter === SHOW_COMPLETED}>
          Completed
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Footer;
