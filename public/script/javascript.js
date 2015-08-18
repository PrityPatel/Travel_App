

$( document ).ready(function() {

$('body').fadeTo(0, 0).fadeTo(1000, 1);

//imageRotator
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            //interval between items (in milliseconds)
            var itemInterval = 5000;

            //cross-fade time (in milliseconds)
            var fadeTime = 2500;

            //count number of items
            var numberOfItems = $('.rotating-item').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();








//signup and login
$('a.login-window').click(function() {

            //Getting the variable's value from a link
    var loginBox = $(this).attr('href');

    //Fade in the Popup
    $(loginBox).fadeIn(300);

    //Set the center alignment padding + border see css style
    var popMargTop = ($(loginBox).height() + 24) / 2;
    var popMargLeft = ($(loginBox).width() + 24) / 2;

    $(loginBox).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });

    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);

    return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() {
  $('#mask , .login-popup').fadeOut(300 , function() {
    $('#mask').remove();
});
return false;
});


// $('#signup_button').on('click', function(){
//   alert('asd');
//   $('#login-box').addClass('hidden');
// });

});



