$(document).ready(function () {
    console.log('I am in a new file now')

    //Your Jquery code here
    console.log("we are using jquery");
    // jQuery syntax looks like this
    // $('selector').action()



    $('p').click(function () {
        console.log('you clicked on p', this)
        // $('#id').hide();
        // $('.class').hide();
    });// do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this)
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });


    // $('p').mouseenter(function () {
    //     console.log('you entered:', this)
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    // $('p').hover(function () {
    //     console.log('you hoverd on:', this)
    //     // $('#id').hide();
    //     // $('.class').hide();
    // },
    // function (){
    //     console.log('thanks for coming')

    // });

    // there are three types of selectors on jQuery
    // 1: element selector
    // 2: id selector 
    // 3: class selector

    // 1. Elements selector this is an example of element selector which clicks on all p 
    // $('p').click();

    //  2. id selector this is an example of id selector
    // $('#second').click();

    // 3. class selector this is an example of class selector
    // $ ('.odd').click();

    // Events in jquery
    // Mouse events = click , dblclick, mouseenter , mouseleave
    // KeyboardEvent = keypress, keydown, keyup,
    // form events = submit, change, focus, blur
    // document/window events = load , resize, scroll, unload

    // demoing the on method 
    $('p').on(
        {
            click: function () {
                console.log('thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }

        })

    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");

    // })

    // $('#wiki').show(1000, function () {
    //     console.log("show");

    // })

    // $('#but').click(function () {
    //     $('#wiki').fadeOut(5000);

    // })

    // $('#but').click(function () {
    //     $('#wiki').fadeIn(1000);

    // })



    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // slide methods - speed and callback parameters are optional
    //     $('#wiki').slideUp(1000 ,function () {
    //     console.log('done');    
    // });
    // $('#wiki').slideDown(1000);
    // $('#wiki').slideToggle(1000);

    // Animate function in jQuery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px' ,
    //     width: '350px'

    // }, "fast")

    // $('#wiki').animate({opacity:0.3}, 1000);
    // $('#wiki').animate({opacity:0.9}, 1000);
    // $('#wiki').animate({width: '350px'}, 12000)

    // $('#wiki').stop()

    // $('#ta').val()
    // "this is your value my text areA"
    // $('#ta').val('setting in to harry')
    // $('#ta').html('setting in to harry')
    // $('#ta').html('settiknklng in to harry')
    // $('#inp').html('setting in to harry')
    // $('#inp').val('setting in to harry')
    // $('#ta').empty()
    // $('#wiki').empty()
    // $('#ta').text('you are good')
    // $('#wiki').text('you are good')
    // $('#wiki').remove()
    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass')
    // $('#wiki').toggleClass('myclass2')
    // $('#wiki').css('background-color' , 'red')
    // $('#wiki').css('background-color')

    // ajax using jquery
    // $.get("https://code.jquery.com/jquery-3.6.0.js", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    //   });
    //  $.get("https://code.jquery.com/jquery-3.6.0.js", function(data, status){
    //     alert("\nStatus: " + status);
    //   });
});
