import axios from 'axios';

// Set the CSRF token from the Rails meta tag
axios.defaults.headers.common['X-CSRF-Token'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

export default axios;
