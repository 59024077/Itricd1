const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

let SpacialCharacter = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;

//จับ Event key
$("input[name='password']").on("keypress", function(event) {

  var keyChar = String.fromCharCode(event.keyCode);

  var output = SpacialCharacter.test(keyChar);
    
  var text = $(this).val();
  
  $(this).val(text.replace(SpacialCharacter, ''));
  
 
  console.log(event.key);
  
  return !output;
});

$("input[name='password']").bind('paste', function (e){

 //keydown or keyup

      $(e.target).keyup(getInput);
 });
 
function getInput(e){
	var inputText = $(e.target).val();
	$(this).val(inputText.replace(SpacialCharacter, ''));
	$(e.target).unbind('keyup');
}

function login()
{
	var username = $('#login-username').val();
	var password = $('#login-password').val();
	var getFileConfig = sessionStorage.getItem("getFileConfig"); 

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": getFileConfig+"/v3/login/"+username,
		"method": "GET"
	}
    $.ajax(settings).done(function (response) {
		console.log(response);
		if ( response == "" ) {
			Swal.fire({
				type: 'error',
				title: 'ผิดพลาด',
				text: 'username หรือ password ไม่ถูกต้อง !!',
				showConfirmButton: false,
				timer: 1500
			})
		} else {
			$.each(response, function(i, val) {

				if ( md5(password) == response[i].password ) {
					sessionStorage.setItem("login",1);
					sessionStorage.setItem("username",username);
					sessionStorage.setItem("showname",'คุณ'+response[i].fname);
					sessionStorage.setItem("fullname",'คุณ'+response[i].fname+' '+response[i].lname);
					//var urlLogin = '/index.html';
					var urlLogin = '/Screenning/index.html';
					window.location = urlLogin;
					console.log('ถูกต้อง'); 
				} else {
					console.log('ผิดพลาด');
					Swal.fire({
						type: 'error',
						title: 'ผิดพลาด',
						text: 'username หรือ password ไม่ถูกต้อง !!',
						showConfirmButton: false,
						timer: 1500
					})
				}

			});
		}

	});

}