var config = {
    apiKey: "AIzaSyDHgbmGV45mkl3rLH_4Z5Ogwx049XoINJo",
    authDomain: "scistorm-ac630.firebaseapp.com",
    databaseURL: "https://scistorm-ac630.firebaseio.com",
    storageBucket: "scistorm-ac630.appspot.com",
    messagingSenderId: "336102182137"
  };
firebase.initializeApp(config);
//Check for user
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    userdata = user;
    console.log('All communities');
  }
  else{
    window.location.href='login.html';
  }
})
//End user check
