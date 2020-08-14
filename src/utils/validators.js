export const isValidEmail = email => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());

  // another simple validator anystring@anystring.anystring
  // const regex = /\S+@\S+\.\S+/;
  // return regex.test(email);
};

export const compareDates = (startDate, endDate) => {
  if ([startDate.toString(), endDate.toString()].includes('Invalid Date')) return false;
  const start = new Date(startDate).toISOString().slice(0, 19);
  const end = new Date(endDate).toISOString().slice(0, 19);
  return new Date(start) <= new Date(end);
};

export const validatePassword = password => {
  const regex = /^(?=.{6,})/;
  if (!regex.test(password)) {
    return 'Password should be 6 or more characters'
  }
  return '';
};