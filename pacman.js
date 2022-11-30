// JavaScript Document
function recthit(rectone, recttwo){
    
    var r1 = $(rectone);
    var r2 = $(recttwo);
    
    var r1x = r1.offset().left;
    var r1w = r1.width();
    var r1y = r1.offset().top;
    var r1h = r1.height();
    
    var r2x = r2.offset().left;
    var r2w = r2.width();
    var r2y = r2.offset().top;
    var r2h = r2.height();
    
    if( r1y+r1h < r2y ||
        r1y > r2y+r2h ||
        r1x > r2x+r2w ||
        r1x+r1w < r2x ){
        return false;
    }else{
        return true;   
    }
    
}//end function 
 
$("#reset").click(function() {

	$("p#score span").html();
})

var score = 0;


$(document).keydown(function(e){
	

    switch (e.which){
    case 37:    // flèche gauche
		
		if( !($('div#pac').is('.img_left'))) {
			$("div#pac").find("#pac_img").removeClass("img_right img_down img_up ").addClass("img_left");
		}
		$("div#pac").finish().animate({
            left: "-=42"
			
        });
			

	//one to many hit detect
	$('.balls').each(function(){
		if(recthit('div#pac',$(this))){
		$(this).css({display:'none'});
		score += 1;
		$("p#score span").html(score);
		}
			
	});
			
			
			
        break;
			
		
    case 38:    // flèche haut
		if( !($('div#pac').is('.img_up'))) {
			
			$("div#pac").find("#pac_img").removeClass("img_down img_left img_right").addClass("img_up");
		}
        
		$("div#pac").finish().animate({
            top: "-=42"
        });
			
		//one to many hit detect
	$('.balls').each(function(){
		if(recthit('div#pac',$(this))){
		$(this).css({display:'none'});
			
		score += 1;
		$("p#score span").html(score);
		}
			
	});
	
		
			
        break;
    case 39:    // flèche droite
		if( !($('div#pac').is('.img_right'))) {
			
			$("div#pac").find("#pac_img").removeClass("img_down img_left img_up").addClass("img_right");
		}
        
		$("div#pac").finish().animate({
            left: "+=42"
        })
		//one to many hit detect
	$('.balls').each(function(){
		if(recthit('div#pac',$(this))){
		$(this).css({display:'none'});
		score += 1;
		$("p#score span").html(score);
		}
			
	});
		
        break;
    case 40:    // flèche du bas
        $("div#pac").find("#pac_img").removeClass("img_right img_left img_up ").addClass("img_down");
		$("div#pac").finish().animate({
            top: "+=42"
        });
		
		//one to many hit detect
	$('.balls').each(function(){
		if(recthit('div#pac',$(this))){
		$(this).css({display:'none'});
		score += 1;
		$("p#score span").html(score);
		}
			
	});
		
		
        break;
    }
});