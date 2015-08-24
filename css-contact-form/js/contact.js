function validateEmail(email){var reg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return reg.test(email);}
$(document).ready(function(){$(".modalbox").fancybox();
$("#contact").submit(function(){return false;});
$("#send").on("click",function(){var emailval=$("#email").val();
var msgval=$("#msg").val();
var msglen=msgval.length;
var mailvalid=validateEmail(emailval);
if(mailvalid==false){$("#email").addClass("error");}
else if(mailvalid==true){$("#email").removeClass("error");}
if(msglen<4){$("#msg").addClass("error");}
else if(msglen>=4){$("#msg").removeClass("error");}
if(mailvalid==true&&msglen>=4){$("#send").replaceWith("<em>sending...</em>");
$.ajax({type:'POST',url:'contact.php',data:$("#contact").serialize(),success:function(data){if(data=="true"){
  $("#contact").fadeOut("fast",function(){$(this).before("<p><strong>Success! Your message has been sent, thank you.</strong></p>");
  setTimeout("$.fancybox.close()",1000);
});
}}
});
}});
});
