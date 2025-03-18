import { supabase } from '$lib/server/supabase_client';
 
export async function GET() {
    try {
        const {data, error} = await supabase
        .from('products')
        .select('*');
 
        return new Response(JSON.stringify({Crafts: data}), {
            headers: { 'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.error('Error fetching the items:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}