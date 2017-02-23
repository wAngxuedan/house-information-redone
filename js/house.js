
	
	window.onload=function(){
	var a=document.body.offsetWidth;
    document.getElementById("container").style.width=a+'px';   
     }
     
     function change1(){
     	document.getElementById("title1-content").className='title1-content';
     	document.getElementById('title2-content').className='noplay';
     	document.getElementById('title3-content').className='noplay';
     }
       function change2(){
     	document.getElementById("title1-content").className='noplay';
     	document.getElementById("title2-content").className='title2-content';
     	document.getElementById("title3-content").className='noplay';
     }

     function change3(){
     	document.getElementById("title1-content").className='noplay';
     	document.getElementById("title2-content").className='noplay';
     	document.getElementById("title3-content").className='title3-content';
     }



	
