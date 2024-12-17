import axios from 'axios';

function getCSRFToken() {
  const name = 'csrftoken';
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken();
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;

