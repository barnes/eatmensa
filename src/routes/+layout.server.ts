// Get the pages from hooks, and pass them to the layout
import type { PageServerLoad } from '$lib/types';
import { pages } from '../hooks.server';
export const prerender = true;
export const load: PageServerLoad = async ({ params }) => {
    return {
        pages
    };
}
