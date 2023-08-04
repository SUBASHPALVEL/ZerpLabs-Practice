container=document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

left_div=document.createElement('div');
left_div.setAttribute('class', 'left_div');
container.appendChild(left_div);

form=document.createElement('form');
form.setAttribute('onsubmit', 'return validateForm()' );
left_div.appendChild(form);

h_Welcome=document.createElement('h1');
h_Welcome.textContent="Welcome back";
form.appendChild(h_Welcome);

p_Welcome=document.createElement('p');
p_Welcome.textContent="Welcome back! please enter your details";
form.appendChild(p_Welcome);

labelForEmail=document.createElement('label');
labelForEmail.setAttribute('for', 'Email');
labelForEmail.textContent="Email";
form.appendChild(labelForEmail);

br1=document.createElement('br');
form.appendChild(br1);

inputForEmail=document.createElement('input');
inputForEmail.setAttribute('type', 'text');
inputForEmail.setAttribute('id', 'Email');
inputForEmail.setAttribute('name', 'Email');
inputForEmail.setAttribute('size', '40'); //
inputForEmail.setAttribute('placeholder', 'Enter your password');
form.appendChild(inputForEmail);

br2=document.createElement('br');
form.appendChild(br2);

br3=document.createElement('br');
form.appendChild(br3);

labelForPassword=document.createElement('label');
labelForPassword.setAttribute('for', 'Password');
labelForPassword.textContent="Password";
form.appendChild(labelForPassword);

br4=document.createElement('br');
form.appendChild(br4);

inputForPassword=document.createElement('input');

inputForPassword.setAttribute('type', 'password');
inputForPassword.setAttribute('id', 'Password');
inputForPassword.setAttribute('name', 'Password');
inputForPassword.setAttribute('size', '40');
inputForPassword.setAttribute('placeholder', 'Enter your password');
form.appendChild(inputForPassword);

br5=document.createElement('br');
form.appendChild(br5);

br6=document.createElement('br');
form.appendChild(br6);

inputForpasswordRemember=document.createElement('input');
inputForpasswordRemember.setAttribute('type', 'checkbox');
inputForpasswordRemember.setAttribute('id', 'passwordRemember');
inputForpasswordRemember.setAttribute('name', 'passwordRemember');
inputForpasswordRemember.setAttribute('value','passwordRemember')
form.appendChild(inputForpasswordRemember);

labelForpasswordRemember=document.createElement('label');
labelForpasswordRemember.setAttribute('for', 'passwordRemember');
labelForpasswordRemember.textContent="Remember for 30 days";
form.appendChild(labelForpasswordRemember);

a_ForgotPassword=document.createElement('a');
a_ForgotPassword.setAttribute('href','');
a_ForgotPassword.setAttribute('id', 'a_ForgotPassword');
a_ForgotPassword.textContent="Forgot password";
form.appendChild(a_ForgotPassword);

br7=document.createElement('br');
form.appendChild(br7);

br8=document.createElement('br');
form.appendChild(br8);

inputForSubmit=document.createElement('input');

inputForSubmit.setAttribute('type','submit');

inputForSubmit.setAttribute('value', 'Sign in');
inputForSubmit.setAttribute('class', 'signInButton');
form.appendChild(inputForSubmit);

br9=document.createElement('br');
form.appendChild(br9);

br10=document.createElement('br');
form.appendChild(br10);

button_googleLogin=document.createElement('button');
button_googleLogin.setAttribute('type','button');
button_googleLogin.setAttribute('class','googleLogin');
form.appendChild(button_googleLogin);

GoogleiconImage=document.createElement('img');

GoogleiconImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg');
GoogleiconImage.setAttribute('alt', 'Google icon');
GoogleiconImage.textContent='Sign in with Google';
button_googleLogin.appendChild(GoogleiconImage);

br11=document.createElement('br');
form.appendChild(br11);

br12=document.createElement('br');
form.appendChild(br12);

labelFornoAccount=document.createElement('label');
labelFornoAccount.setAttribute('for','noAccount');
labelFornoAccount.setAttribute('id','noAccount');
labelFornoAccount.textContent='Don\'t have an account';
form.appendChild(labelFornoAccount);

a_Signup=document.createElement('a');
a_Signup.setAttribute('href', '');
a_Signup.setAttribute('id', 'a_Signup');
a_Signup.textContent='Sign up';
form.appendChild(a_Signup);


function validateForm() {
    var isValid = true;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;

    if (Email === "" || Password === "") {
        alert("Please fill in all fields.");
        isValid = false;
        return false;
    }

    else if (!isValidEmail(Email)) {
        alert("Please enter proper email ID.");
        isValid = false;
        return false;
    }


    alert("Sign-in successful!");
    return true;
}


function isValidEmail(Email) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(Email);
  }




















































right_div=document.createElement('div');
right_div.setAttribute('class', 'right_div');
container.appendChild(right_div);

circle_image=document.createElement('div');
circle_image.setAttribute('class', 'circle_image');
right_div.appendChild(circle_image);

circle_image_1=document.createElement('img');
circle_image_1.setAttribute('src', 'image.jpg');
circle_image_1.setAttribute('alt', 'Image');
circle_image.appendChild(circle_image_1);