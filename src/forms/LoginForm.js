import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field } from 'react-final-form';

import TextField from '../fields/TextField';


function LoginForm({
  handleSubmit,
  submitError,
  formId,
}) {
  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
    >
      <Field
        name="userName"
        component={TextField}
        type="text"
        label="Username"
        fullWidth
      />
      <Field
        name="password"
        component={TextField}
        type="password"
        label="Password"
        fullWidth
      />
      <button type="submit" hidden />
      {submitError && (
        <Typography color="secondary">{submitError}</Typography>
      )}
    </form>
  );
}

export default LoginForm;
