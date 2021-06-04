//Animation type #0
$('#AnimateBar')
.css({ background : 'blue', color: 'white' })
.delay(2000)
.slideUp()
.delay(1000) 
.fadeIn(1000); 

//Animation type #1
$("#testAnim").on('click', function(){
    $(this).animate({
        width: "500px",
        opacity: 0.4,
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});

//Animation type #2
$("#testAnim2").on({ 
    'mouseover' : function() { 
        $(this).stop().animate({
            width:300}, 500); }, 
            'mouseout' : function() { 
                $(this).stop().animate({width:200}, 500); } 
            }); 

//Animation type #3
$("#testAnim3").on('click', function(){ 
    $(this).animate({ 
        width: "+=" + 50, 
        height: "+=" + 10, 
        opacity: "-=" + 0.1, 
        duration : 2000}); 
});

//Animation type #4
$("#testAnim4").on('click', function(){ 
    $(this).animate({ 
        height:200, 
        width:400, 
        opacity: 0.5 }, 
        { 
            duration: 1000, 
            ease: 'linear', 
            complete: function() { alert("koniec animacji"); 
        }
    }); 
});   

//Animation type #5
const apiUrl = "https://jsonplaceholder.typicode.com";
const $list = $('.user-list');

$('.test-ajax').on('click', function() {
    const $btn = $(this);

//establishing connection
$.ajax({
    url : apiUrl + '/users',
    dataType : 'json'
})
.done((res) => {
    //clearing the list before adding users
    //otherwise reclicking will cause duplication of users on the list
    $list.empty();

    //looping on returned array
    //appending to list new LI with user's name and e-mail
    res.forEach(el => {
        $list.append(`<li>${el.address.geo.lat} : ${el.address.geo.lng}</li>`);
    })
})
.always(() => {
    //finally we turn off loading
    //then we turn on the button
    $btn.removeClass('loading');
    $btn.prop('disabled', false);
    });
});
