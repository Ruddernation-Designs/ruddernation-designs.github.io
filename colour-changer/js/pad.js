function pad(s,i,c,r){ i=i+1-s.length;
if(i<1)return s;
c=new Array(i).join(c||" ");
return r?s+c:c+s;
}; 
pad("6",6,"6");
pad("0",0,"0",true);
$( document  ).ready(function(){
$(  "#colourchanger" ).on( "click" , function(){
	var color  = "#"+pad((Math.random()*0x1000000<<0).toString(16),6,"6")
$( "body"  ).css( {"background-color" : color } );})});
