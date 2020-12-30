
export const validateRegisterInput = (username, email, password, confirmPassword) => {
    
    const errors = {}
    if (username.trim() === '') {
        errors.username = 'Username field cannot be empty'   
    } 
    
    if (email.trim() === '') {
        errors.email = 'Email field cannot be empty'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (!email.match(regEx)) {
            errors.email = 'Not a valid email id'
        }
    }

    if (password.trim() === '') {
        errors.password = 'Password field cannot be empty'
    } else if (password !== confirmPassword) {
        errors.password = 'Passwords should match'
    } 

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

export const validateLoginInput = (username, password) => {
    const errors = {}
    
    if (username.trim() === '') {
        errors.username = 'Username field cannot be empty'   
    }

    if (password.trim() === '') {
        errors.password = 'Password field cannot be empty'
    } 

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}
