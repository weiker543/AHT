 $('document').ready(function(){

 	var is_clicked = false ;
 	$('#burger').click(function(){
 		is_clicked = !is_clicked;
 		if(is_clicked){
 			$('.mobile-menu').removeClass('mobile-menu__hide');
 			$('.mobile-menu').addClass('mobile-menu__show');
 		}else{
 			$('.mobile-menu').removeClass('mobile-menu__show');
 			$('.mobile-menu').addClass('mobile-menu__hide');
 		}

 	});


    $('#create-page').click(function(){
        var chbox = document.getElementById('setLanguage');
        if(chbox.checked){
            window.location.href = "add-language.html";
        }else{
            window.location.href = "domain.html";
        }
    });        
    
 });

  // window.location.href = "add-language.html";