import { FORM_ERROR } from 'final-form';

export const remoteSubmit = formId => () => {
  document.getElementById(formId)
    .dispatchEvent(new Event('submit', { cancelable: true }));
};

export const onSubmitFeedback = (
  onSubmit,
  onSubmitSuccess,
  onSubmitError,
) => value => onSubmit(value)
  .then((result) => {
    if (onSubmitSuccess) { onSubmitSuccess(result); }
    return result;
  })
  .catch((error) => {
    if (onSubmitError) { onSubmitError(error); }
    return { [FORM_ERROR]: error.message };
  });
