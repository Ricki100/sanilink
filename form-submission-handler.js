
$('#contactForm').submit(function(e) {
    e.preventDefault();
    
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxX686CQsh8IhZOTQj42XvKZ-JMNcGHQygPtAYAChNqDbp7zK0t/exec",
        data: $(this).serialize(),
        type: "POST",
        dataType: "xml",
        success: function(data) {
          document.getElementById("contactForm").reset();
                 },
        error: function(xhr, status, error) {
            console.log('Submission failed: ' + error);
        }
    });
  });
  
  function validateForm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you for your message. We will get back to you shortly',
      showConfirmButton: false,
      timer: 4000
  })
  $( "#button" ).prop( "disabled", true );
  $("input").val(" ");
  $( "#button" ).css( {"background-color":"red"},{"border":"0px"});
  }


  

  //emailvalidation//
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}


function ValidateEmail() {
	var email = document.getElementById("email").value;
	var lblError = document.getElementById("lblError");
	lblError.innerHTML = "";
	var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (!expr.test(email)) {
		lblError.innerHTML = "Invalid email address. Application will not submit";
	}
}





