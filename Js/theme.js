document.addEventListener('DOMContentLoaded', function() {
    
    let darkMode = true;
    let lightMode = false;
    // ***** Creating functions *****

    function LightMode(){
        darkMode = false;
        lightMode = true;
        $('#mode').text('Dark Mode');

        $('body').css('backgroundColor', 'hsl(0, 0%, 100%)');
        $('.box').css('backgroundColor', 'hsl(227, 47%, 96%)');
        $('.main-header-div').css('backgroundColor', 'hsl(227, 47%, 96%)');
        $('.numberBig').css('color', 'hsl(230, 17%, 14%)');
        $('.followersSubcribers').css('color', 'hsl(228, 12%, 44%)');
        $('.pseudo').css('color', 'hsl(230, 17%, 14%)');
        $('.boxUp').css('color', 'hsl(228, 12%, 44%)');
        $('.downBig').css('color', 'hsl(230, 17%, 14%)');
        $('#title').css('color', 'hsl(230, 17%, 14%)');
        $('#titleFollowers').css('color', 'hsl(228, 12%, 44%)');
        $('#titleCenter').css('color', 'hsl(230, 17%, 14%)');
        $('#mode').css('color', 'hsl(228, 12%, 44%)');
        $('.attribution').css('color', 'hsl(230, 17%, 14%)');
        $('.a').css('color', 'hsl(230, 17%, 14%)');
        $('.a').mouseover(function () { 
            $(this).css('color', 'hsl(163, 72%, 41%)');
        });
        
        $('.a').mouseout(function () { 
            $(this).css('color', 'hsl(230, 17%, 14%)');
        });

        $('.button').css({
            'justify-content': 'end',
            'background': 'hsl(230, 22%, 74%)'
        });

        $('.cercle').css({
            'margin-right': '0.2rem',
            'backgroundColor': 'hsl(0, 0%, 100%)'
        });
    }

    function DarkMode(){
        darkMode = true;
        lightMode = false;
        $('#mode').text('Light Mode');

        $('body').css('backgroundColor', 'hsl(230, 17%, 14%)');
        $('.box').css('backgroundColor', 'hsl(228, 28%, 20%)');
        $('.main-header-div').css('backgroundColor', 'hsl(228, 28%, 20%)');
        $('.numberBig').css('color', 'hsl(0, 0%, 100%)');
        $('.followersSubcribers').css('color', 'hsl(228, 34%, 66%)');
        $('.pseudo').css('color', 'hsl(0, 0%, 100%)');
        $('.boxUp').css('color', 'hsl(228, 34%, 66%)');
        $('.downBig').css('color', 'hsl(0, 0%, 100%)');
        $('#title').css('color', 'hsl(0, 0%, 100%)');
        $('#titleFollowers').css('color', 'hsl(228, 34%, 66%)');
        $('#titleCenter').css('color', 'hsl(0, 0%, 100%)');
        $('#mode').css('color', 'hsl(228, 34%, 66%)');
        $('.attribution').css('color', 'hsl(228, 34%, 66%)');
        $('.a').css('color', 'hsl(228, 34%, 66%)');
        $('.a').mouseover(function () { 
            $(this).css('color', 'hsl(0, 0%, 100%)');
        });
        
        $('.a').mouseout(function () { 
            $(this).css('color', 'hsl(228, 34%, 66%)');
        });

        $('.button').css({
            'justify-content': 'start',
            'background': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
        });

        $('.cercle').css({
            'margin-left': '0.2rem',
            'backgroundColor': 'hsl(230, 17%, 14%)'
        });
    }

    $('.button').click(() => {
        if(darkMode){
            LightMode();
        } else if (lightMode){
            DarkMode();
        }
    });

    // ***** ****************** *****    
});
