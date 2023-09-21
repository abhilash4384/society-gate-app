const emailPattern = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;


export const validateForm = (isSubmitted, formData, errors) => {
  if (!isSubmitted) return;

  const formErrors = { ...errors };
  let isError = false;
  Object.keys(formData).forEach((fieldName) => {
    const field = formData[fieldName];
    console.log("field = ", field);
    if (field.required && (!field.value || field.value === "")) {
      isError = true;
      formErrors[field.name] = `${field.label.replace('*', '')} is required.`;
    } else if(field.type === "email" && field.value && !emailPattern.test(field.value)) {
        isError = true;
        formErrors[field.name] = `Valid email required.`;
    } else {
      delete formErrors[field.name];
    }
  });
  formErrors.isError = isError;
  return formErrors;
};
