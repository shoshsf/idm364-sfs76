import * as db from '$lib/database.js';

export const actions = {
   

    register: async ({request}) => {
        const data = await request.formData()
        const email = data.get('email');
        const password = data.get('password');

        try{
            return db.user_register(email);
        } 

        catch (error){
            if (error instanceof Error ) 
                throw new Error( error.message);
            else throw error;
        }

    }
};