import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'formik';
import { Button, Paper, FormControl } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  paperRoot:{
    maxWidth: 450,
    width:"100%"
  },
  root: {
    display: "flex",
    flexDirection: "column"
  },
  inputWrapper:{
    margin: "5px 0"
  },
  button:{
    marginTop: theme.spacing(3),
  }
}));

export default function CreateGroup(props) {
  const classes = useStyles();

  return (
    <Paper square={true} className={classes.paperRoot} elevation={0}>
      <Form className={classes.root}>
        <FormControl className={classes.inputWrapper} fullWidth>
          <Field label="Title" name="title" component={TextField} fullWidth />
        </FormControl>
        <FormControl className={classes.inputWrapper} fullWidth>
          <Field label="Tagline" name="tagline" component={TextField} fullWidth/>
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button} type="submit">Submit</Button>
      </Form>
    </Paper>
  );
}