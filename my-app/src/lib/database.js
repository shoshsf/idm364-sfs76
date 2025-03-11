const invalid_domains = ['example.com'];

let users = [
    {
        id: "1",
        email: "samihafshoshi@gmail.com"    }];


export function user_login(email){
    //name@email.com
    // [name@ , example.com]
    const domain = email.split('@')[1]

    if (invalid_domains.includes(domain)){
        return {
            email,
            login_success: false,
            message: 'Invalid Domain'
        }
    }

    return{
        email,
        login_success: true,
    }
};


export function user_register(email, password) {

    if (users.find(user => user.email === email)){
        return {
            email,
            register_success: false,
            message: 'Email already exists'
        };
    }
    return {
        email,
        register_success: true
    }
};