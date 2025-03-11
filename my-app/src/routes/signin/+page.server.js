import * as db from '$lib/database.js'

export const actions = {
    login: async({request}) => {
        const data = await request.formData()
        const email = data.get('email');

        try{
            return db.user_login(email);
        } 
        catch (error){
            if (error instanceof Error ) 
                throw new Error( error.message);
            else throw error;
        }

    },

    // register: async ({request}) => {
    //     const data = await request.formData()
    //     const email = data.get('email');

    //     return{
    //         email: email,
    //         login_success: true
    //     }
    // }
}