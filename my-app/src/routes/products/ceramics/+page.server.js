import { supabase } from '$lib/server/supabase_client';
export async function load (){
    const { data } = await supabase.from('products').select('*');
    return { 
        products: data ?? [] 
    };
}