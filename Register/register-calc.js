function calculateFullName() {
    const firstNameValue = firstname.value;
    const surNameValue = surname.value;
    let fullNameInput = fullname;
    const fullNameValue = `${firstNameValue} ${surNameValue}`;
    fullNameInput.value = fullNameValue;
}

function calculateAge() {
    if (dob.value) {
        const dobVal = new Date(dob.value);
        const today = new Date();
        let ageVal = today.getFullYear() - dobVal.getFullYear();
 
        if (today.getMonth() < dobVal.getMonth() || (today.getMonth() === dobVal.getMonth() && today.getDate() < dobVal.getDate())) {
            ageVal--;
        }
        age.value = ageVal;
    }
    else {
        age.value = "";
    }
}

function clearForm()
{
    form.reset();
    clearClasses([firstname, surname, username, email, mobile, password, cpassword]);
    clearErrorMessages([firstname, surname, username, email, mobile, password, cpassword]);
    window.scrollTo(0, 0);
}

function saveFormDataToJson()
{
    const userData = getUserFormData();
    const jsonData = JSON.stringify(userData, null, 2);
    console.log(jsonData); 

    const existingData = JSON.parse(localStorage.getItem('formDataJsonArray')) || [];

    existingData.push(jsonData);

    localStorage.setItem('formDataJsonArray', JSON.stringify(existingData));
}

function clearClasses(elements) {
    elements.forEach(element => {
        const inputGroup = element.parentElement;
        inputGroup.classList.remove('success', 'error');
    });
}
 
function clearErrorMessages(elements) {
    elements.forEach(element => {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.innerText = '';
    });
}