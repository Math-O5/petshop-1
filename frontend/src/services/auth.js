import axios from 'axios';


export default class Auth  {
  static isAuthenticated() {
    let userData = localStorage.getItem('userData');
    if (!userData) return { indicator: 0 };

    userData = JSON.parse(userData);
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;

    return userData;
  }

  static logIn(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post('/user/login', { email, password })
        .then((response) => {
          const { id, username, email, token, role } = response.data;
          let indicator = 0;
          switch (role) {
            case 'User':
              indicator = 1;
              break;
            case 'Admin':
              indicator = 2;
              break
            default:
              indicator = 0;
          }
          localStorage.setItem(
            'userData',
            JSON.stringify({ id, username, email, token, role, indicator })
          );

          axios.defaults.headers.common.Authorization = `Bearer ${token}`;

          resolve(true);
        })
        .catch((err) => {
          localStorage.removeItem('userData');
          resolve(false);
        });
    });
  }

  static logOut(ignoreBackendTokens) {
    localStorage.removeItem('userData');
    localStorage.clear();
    axios.defaults.headers.common.Authorization = null;
  }
}
