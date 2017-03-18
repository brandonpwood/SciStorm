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
    console.log('profile of' + user.email);
  }
  else{
    window.location.href='login.html';
  }
})
//End user check

$(document).ready(function(){
	$('.navbar-fixed').delay(250).animate({
		opacity: 1
	});
	$('#fadefromwhite').delay(250).animate({
      top: '-100%'
    },1000,function(){
      $('#fadefromwhite').hide();
    });
});
