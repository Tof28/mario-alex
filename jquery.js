function fd() {
    

    var marioposition = $('#mario').position();

    var marioLeft = marioposition.left;

    marioLeft += 20;

    if(marioLeft<740) {

        $("#mario").css("left", marioLeft + "px");

        var score = $('#score span').html();

        score = parseInt(score) + 1;

        if(score == 10) {
            $('#score').html('<h1>C\'est gagné !');    
        } else {

            $('#score span').html(score);
        }

    }
    

    
}

function fg() {


        var marioposition = $('#mario').position();

        var marioLeft = marioposition.left;

        marioLeft -= 20;

        if(marioLeft>-10) {

            $("#mario").css("left", marioLeft + "px");

        }
        

}

function ft() {


        var marioposition = $('#mario').position();

        var marioTop = marioposition.top;

        marioTop -= 20;

        if(marioTop>0) {
            
            $("#mario").css("top", marioTop + "px");

        }



}

function fb() {


        var marioposition = $('#mario').position();

        var marioTop = marioposition.top;

        marioTop += 20;

        if(marioTop<355) {

            $("#mario").css("top", marioTop + "px");

        }

}

    $('#reset').click(function(){
        $('#score span').html('0');
        $('#main').css('display', 'none');
        $('#mario').css('display', 'block');
        $('#mario').css('top', '275px');
        $('#mario').css('left', '0');
    })


/*function victory() {
    var marioposition = $('#mario').position();
    console.log(marioposition);
    var victoryposition = $('#victoryPos').offset();
    if(marioposition == victoryposition) {
        $('#main').css('display', 'none');
        $('#mario-win').css('display', 'block');
        $('#mario-win').css('top', '55px');
        $('#mario-win').css('left', '365px');
        $('#victoryBox').css('display', 'block');
    }   
}*/

/*function pointMonstre(score) {

    var score = 0;

    if(marioLeft == '60px') {
        score += 10;
        return;
    }
}*/

    /* $("#mario").animate({
        left:"700px"}, 10000
    ) */


$(document).mousemove(function(event){

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    var container_position = $('#container-mario').position();
    var container_positionX = container_position.left;
    var container_positionY = container_position.top;

    $('#main').css('left', mouseX-container_positionX-50 + 'px');
    $('#main').css('top', mouseY-container_positionY-50 + 'px');

});

$("#castlePos").click(function() {
    $('#main').css('display', 'none');
    $('#mario').css('display', 'block');
})

$("#victoryPos").click(function() {
    $('#main').css('display', 'none');
    $('#mario-win').css('display', 'block');
    $('#mario-win').css('top', '55px');
    $('#mario-win').css('left', '365px');
    $('#victoryBox').css('display', 'block');
})


  


$( document ).ready(function() {
    
    var score = 0;

    $('#score span').html(score);
        
});

var score = 0;

$(document).keydown(function(e){
    console.log(e.which);
    switch (e.which){
        case 37:    //left arrow key
            fg();
            break;
        case 38:    //up arrow key
            ft();
            break;
        case 39:    //right arrow key
            fd();
            break;
        case 40:    //bottom arrow key
            fb();
            break;
        }
});
