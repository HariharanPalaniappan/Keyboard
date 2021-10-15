$(document).ready(function(){
    $('.key').click(function(e){
        var crntValue = this.innerHTML;
        $('.keycode h1').empty();
        $('.keycode h1').append(crntValue);
        
    });
    $(window).keydown(function(event){
        $('.key').removeClass('key-click');
        $('.keycode h1').empty();
        $('.keycode h1').append(event.keyCode);
        console.log(event.code);
        var tempsplit;
        if(event.code.includes("Key")){
            tempsplit = event.code.split("Key");
            if(tempsplit[1] == "F"){
                $('.keyF').addClass('key-click');
            }
            else{
                $('.key:contains('+tempsplit[1]+')').addClass('key-click');
            }
        }
        else if(event.code.includes("Shift")){
            $('.key:contains(shift)').addClass('key-click');
        }
        else if(event.code.includes("Enter")){
            $('.key:contains(return)').addClass('key-click');
        }
        else if(event.code.includes("Digit")){
            tempsplit = event.code.split("Digit");
            $('.key:contains('+tempsplit[1]+')').addClass('key-click');
        }
    });
});