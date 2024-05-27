function goBack() {
    window.history.back();
}

function calculateAge() {
    // Get the date of birth from the input field
    const dob = document.getElementById('dob').value;
    
    // Validate the input field
    if (!dob) {
        alert('Please enter your date of birth.');
        return;
    }

    // Parse the date of birth
    const dobDate = new Date(dob);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    // Adjust age if the birth date has not occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `Your age is: ${age}`;
}


function validateForm() {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const dobError = document.getElementById('dobError');
    const result = document.getElementById('result');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    dobError.textContent = '';
    result.textContent = '';

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    // Validate email
    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Email is invalid';
        return false;
    }

    // Validate date of birth
    if (dob === '') {
        dobError.textContent = 'Date of Birth is required';
        return false;
    } else {
        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate > today) {
            dobError.textContent = 'Date of Birth cannot be in the future';
            return false;
        }
    }

    // If all validations pass
    result.textContent = 'Form submitted successfully!';
    return true;
}
