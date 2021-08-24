$(document).ready(function(){
    
    $(window).scroll(function(){

        

    });


    var i=3;
            
        $(".sec10_imgwrap").click(function(){
            i--; 
                //1씩 감소했지만 1==0에 만족하지 않으니까 else로 넘어감 eq(i)는 순서를 뜻하는 거니까 해당 숫자가 오면 페이드아웃//
                //i--하다가 i가 0에 맞을 때 3장 모두 페이드인으로 나왔다가 다시 숫자가 감소하면서 else로 넘아감//
            if(i==0){
                $(".sec10_imgwrap>img").fadeIn();
                i=3;
            }else{
                $(".sec10_imgwrap>img").eq(i).fadeOut();
                }
            });
            
            setInterval(function(){
                $(".sec10_imgwrap").trigger("click");
            },2000);
  
  

});//end