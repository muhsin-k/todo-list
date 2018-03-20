import users from './userData';

export function loginUser(credentials) {
  return fakeLogin(credentials);
}

function fakeLogin(credentials) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.forEach((user) => {
        if (user.email === credentials.email) resolve(user);
      });
      reject(new Error('User not found!'));
    }, 1000);
  });
}

export function logoutUser() {
  return fakeLogout();
}

function fakeLogout() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
}
