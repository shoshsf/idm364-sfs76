import {error} from '@sveltejs/kit';
// import { slugify } from '$lib/utils';
// import { products } from '$lib/items';

// export function load({params}){
//     const product = products.find((product) => slugify(product.name) === params.slug);

//     if (!product) throw error(404);

//     return {product};
// }

import { supabase } from '$lib/server/supabase_client';

export async function load({ params }) {
    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .limit(1)
        .single()
        .eq('slug', params.slug); // Assuming there's a 'slug' column in the database

    if (error || !product) throw error(404);

    return { product };
}