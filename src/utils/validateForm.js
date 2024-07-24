export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  return password.length >= 8;
}

export function validateForm(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!validatePassword(values.password)) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
}
