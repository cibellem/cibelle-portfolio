let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export default firebaseConfig;
