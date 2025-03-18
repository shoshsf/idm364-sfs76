// <!-- NEW VERSION CONNECTED TO SUPABASE! -->

import { supabase } from '$lib/server/supabase_client';
export async function load (){
    const { data } = await supabase.from('products').select('*');
    return { 
        products: data ?? [] 
    };
}



// <!--  OLD LOCAL DATABASE Version  -->

// import { slugify } from '$lib/utils';
// import { products } from '$lib/items';

/**
 * The load function iterates over the `teams` array and returns an object.
 * Each object in the array 'mascots' has 'name' and 'mascot' properties.
 * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
 *
 * @module {Function} load
 * @returns {{teams: {name: string, mascot: string, slug: string}[]}} - An object with teams array
 */
// export function load() {
//   return {
//     products: products.map((product) => ({
//       productImg: product.productImg,
//       name: product.name,
//       price: product.price,
//       slug: slugify(product.name)
//     }))
//   };
// }
