/*
  SciStorm Storm Storms Page
  2.11.17
  Brandon Wood, Joe Babbit, Brennan Macaig
*/

var config = {
    apiKey: "AIzaSyDHgbmGV45mkl3rLH_4Z5Ogwx049XoINJo",
    authDomain: "scistorm-ac630.firebaseapp.com",
    databaseURL: "https://scistorm-ac630.firebaseio.com",
    storageBucket: "scistorm-ac630.appspot.com",
    messagingSenderId: "336102182137"
  };
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref('storms');
var userRef = ref.user;
//Check for user
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    userdata = user;
    console.log('storms of ' + user.email);
  }
  else{
    window.location.href='login.html';
  }
})
//End user check
var userStorms = firebase.auth()
var database = firebase.database();
var ref = database.ref('storms');

//Check for user
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    userdata = user;
    console.log(user);
  }
  else{
    window.location.href='login.html';
  }
})
//End user check
var userStorms = firebase.auth()
$(document).ready(function(){
  $('.navbar-fixed').delay(250).animate({
    opacity: 1
  });
  $('#fadefromwhite').delay(500).animate({
    top: '-100%'
  },1000,function(){
    $('#fadefromwhite').hide();
  });
})
//truncate strings
$("#small-cards").children().each(function(){
  $(this).find('.feed-post-subtitle').text(($(this).find('.feed-post-subtitle').text().substring(0,40)+"..."));
})
