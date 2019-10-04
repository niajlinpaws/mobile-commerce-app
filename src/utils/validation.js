export const required = field =>(value='')=>value.trim() ? undefined : `${field} Required`;
export const usernamerequired = value => (value ? undefined : "Username Required");
export const phonenumberrequired = value => (value ? undefined : "Phone Number Required");
export const emailrequired = value => (value ? undefined : "Email Required");
export const passwordrequired = value => (value ? undefined : "Password Required");
export const otprequired = value => (value ? undefined : "Verification OTP Required");

export const oldpasswordrequired = value => (value ? undefined : " Old Password Required");
export const newpasswordrequired = value => (value ? undefined : "New Password Required");
export const confirmpasswordrequired = value => (value ? undefined : "Confirm Password Required");



export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

export const minLength = min => value =>
  value && value.length < min ? `Password Must be ${min} characters or more` : undefined;

export const minLength8 = minLength(8);

export const minNumberLength = min => value =>
  value && value.length < min ? `Phone Number Must be ${min} characters or more` : undefined;

export const minLength10 = minNumberLength(10);

export const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

  export const alphaOnly = value =>
  value && /[^a-zA-Z ]/i.test(value)
    ? "In user name numeric values not allowed"
    : undefined;


