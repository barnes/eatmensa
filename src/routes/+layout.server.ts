
import type { PageServerLoad } from '$lib/types';
import { getPages, getToken, pages } from '../hooks.server';
export const load: PageServerLoad = async ({ params }) => {
    return {
        pages
    };
}
