import {error} from '@sveltejs/kit';
import { slugify } from '$lib/utils';
import { products } from '$lib/items';

export function load({params}){
    const product = products.find((product) => slugify(product.name) === params.slug);

    if (!product) throw error(404);

    return {product};
}