import type { PageServerLoad } from '$lib/types';
import { token, pages} from '../../hooks.server';

export const load: PageServerLoad = async ({ params }) => {
    const filteredPage = (pages.filter(page => page.slug === params.page));
    const id = filteredPage[0].id;
    const getData = async (endPoint: string, token: string, id: string) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        const response = await fetch(`http://barnescreate.com/graphql/wp-json/wp/v2/${endPoint}/${id}?mo_rest_api_test_config=jwt_auth`, requestOptions);
        const results = await response.json();
        return results
    };

    const results = await getData('pages', token, id);
    return{
        results
    }
}