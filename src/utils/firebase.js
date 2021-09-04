import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDM0AtyycfphAG-yGngjtHcUvjS12Hm2xM",
    authDomain: "chat-2-24337.firebaseapp.com",
    projectId: "chat-2-24337",
    databaseURL: "https://chat-2-24337-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "chat-2-24337.appspot.com",
    messagingSenderId: "807747745051",
    appId: "1:807747745051:web:20aec04c8c714d00344fbe"
};

firebase.initializeApp(firebaseConfig);

export default firebase