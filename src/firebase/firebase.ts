import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3yVHGjHgOc1v739H8wsdJBVgusBiaeR4',
  authDomain: 'test-react-redux-typescr-c5d36.firebaseapp.com',
  projectId: 'test-react-redux-typescr-c5d36',
  storageBucket: 'test-react-redux-typescr-c5d36.appspot.com',
  messagingSenderId: '404471940332',
  appId: '1:404471940332:web:3ab83394d2e426cea1d1c9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();

export default firebaseAuth;