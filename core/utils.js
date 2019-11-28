export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  if (password.length < 8) return 'Password must be at least 8 characters.';

  return '';
};

export const usernameValidator = username => {
  const validSymbols = /^[a-zA-Z0-9-_~]+$/;

  if (!username || username.length <= 0) return 'Username cannot be empty.';
  if (!validSymbols.test(username)) {
    return 'Username can contain only a-z, A-Z, 0-9, -, ~, and _.';
  }

  return '';
};
