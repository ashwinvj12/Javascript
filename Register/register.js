const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const surname = document.querySelector('#surname');
const fullname = document.querySelector('#fullname');
const dob = document.querySelector('#dob');
const age = document.querySelector('#age');
const mobile = document.querySelector('#mobile')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
 
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
    else{
        saveFormDataToJson();
    }
})
 
function validateInputs(){
    const userData = getUserFormData();
    let success = true
    
    if(userData.firstName === ''){
        success=false;
        setError(firstname,'First name is required');
    }
    else if (!validateFirstName(userData.firstName))
    {
        success=false;
        setError(firstname,'First name should be in Alphabets');
    }
    else{
        setSuccess(firstname);
    }

    if(userData.surName === ''){
        success=false;
        setError(surname,'Sur name is required');
    }
    else if(!validateSurName(userData.surName))
    {
        success=false;
        setError(surname,'Sur name should be in Alphabets');
    }
    else{
        setSuccess(surname);
    }

    if(userData.username ===''){
        success=false;
        setError(username,'Username is required')
    }
    else if(!validateUserName(userData.username))
    {
        success=false;
        setError(username,'Username should not contain space')
    }
    else{
        setSuccess(username)
    }
 
    if(userData.email===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(userData.email)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    
    if(userData.mobile==='')
    {
        success = false;
        setError(mobile,'Mobile number is required');
    }
    else if ((userData.mobile).length < 10)
    {
        success = false;
        setError(mobile,'Mobile number should contain 10 digits');
    }
    else if (!validateMobile(userData.mobile))
    {
        success = false;
        setError(mobile,'Mobile number should contain only number');
    }
    else{
        setSuccess(mobile);
    }

    if(userData.password === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(!validatePassword(userData.password)){
        success = false;
        setError(password,'Password is weak')
    }
    else{
        setSuccess(password)
    }
 
    if(userData.cpassword === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(userData.cpassword!==userData.password){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    window.scrollTo(0, 0);
    return success; 
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
 
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
 
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
 
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

function validateFirstName(firstName) {
    return /^[A-Za-z]+$/.test(firstName);
}

function validateSurName(surNameValue) {
    return /^[A-Za-z]+$/.test(surNameValue);
}
 
function validateUserName(userNameValue) {
    return /^[A-Za-z0-9_@!]+$/.test(userNameValue);
}
 
function validateMobile(mobileValue) {
    return /^[0-9]+$/.test(mobileValue);
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function validatePassword(passwordValue) { 
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordValue);
}

function getUserFormData() {
    const FormData = {
        firstName: firstname.value,
        surName: surname.value,
        fullName: fullname.value,
        username: username.value,
        dob: dob.value,
        age: age.value,
        mobile: mobile.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value
    };
    return FormData;
}  

