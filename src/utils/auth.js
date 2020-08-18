
import jwt_decode from 'jwt-decode';

const SECOND = 1000;
const getValidToken = () => {
  if (!localStorage.token) {
    return false;
  }

  const decoded = jwt_decode(localStorage.token);
  const currentTime = Date.now() / SECOND;
  if (decoded.exp < currentTime) {
    localStorage.removeItem('token');
    return false;
  }
  return localStorage.token;
};

export {
  getValidToken
}