//Selects random tagline and background on load
function random(){
  var rando =  Math.floor(Math.random() * (19 - 1 + 1)+1);
  console.log(rando);

  $('body').css('background-image',"url(img/img"+rando+".jpg)");
};

//Swaps two divs between hidden and shown
function swapDivs(shownDiv, hiddenDiv){
  $(shownDiv).animate({
    opacity: 0
  },1000).hide(),
  $(hiddenDiv).show().animate({
    opacity:1
  });
}
random();

//Clicks and Clacks
// $(document).ready(function(){
//     //Hide buttons initially, to be shown later
//     $('btns').hide();
//     $('btns2').hide();
//     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//
//     //Open form to send email and name
//     $('#register').click(function() {
//       swapDivs('.btns', '.btns2');
//     });
//
//     // Send email form
//     $('#send').click(function(){
//       console.log('Request Recieved')
//       var status = requestBeta($('#name').val(), $('#email').val());
//       if(status == true){
//         //Send "Success", return to login button, new background
//         Materialize.toast('Success!');
//         swapDivs('.btns2', '.loginbtn');
//         random();
//       }else if(status == 'invalid'){
//         //Send invalid
//         Materialize.toast('Not a valid email.');
//       }else{
//         //send error
//         Materialize.toast('There was an er  ror connecting to the server.');
//       }
//     });
// });
