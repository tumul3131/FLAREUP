var sub_text="Form successfully submitted !";
function changebutton(){
    alert(sub_text);
    location.href='project_backup.php';
}

function verifyPswd(){
    var pswd=prompt("Enter admin password :");
    if(pswd==="fullstack22*"){
        window.alert("Password correct !");
        window.location='add.html';
    }
    else{
        window.alert("Password incorrect !");
        window.location='form1.html';
    }
}
function loginbutton(){
    location.href='login_form.php';
}

$(document).ready(
        function(){
            $('#firstname').change(
                function(){
                    if($('#firstname').val().length < 5 ){
                        //$('#firstname').css("background-color","red");
                        $('#f_name_error').text('*First name must not be smaller than 5');
                    }
                    else{
                        $('#f_name_error').text('');
                    }
                }
            )
        }
)


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}