export const getErrorOnValidate = (mode: string, errors?: any, touched?: any, label?: string): any => {
  if (mode === 'background') {
    return {
      background: touched && errors ? 'var(--red-error)' : 'var(--grey-input)',
      '& .MuiInputLabel-root': { color: touched && errors ? 'var(--red-error-text)' : 'var(--grey-light)' },
    }
  }
  if (mode === 'label') {
    return touched ? errors : label;
  }
};