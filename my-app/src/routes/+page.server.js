// export const actions ={
//     default: async({request}) => {
//         const data = await request.formData();
//         const name = Date.get('name');

//         console.log(name);
        
//         return {
//             name,
//             success: true
//         }
//     }
    
// }

import { supabase } from '$lib/server/supabase_client';
export async function load (){
    const { data } = await supabase.from('products').select('*');
    return { 
        products: data ?? [] 
    };
}