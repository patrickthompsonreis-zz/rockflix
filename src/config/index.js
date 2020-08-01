const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://imersao-react-project.herokuapp.com';

export default {
  URL,
};
