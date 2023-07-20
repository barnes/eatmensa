import type { PageServerLoad } from '$lib/types';
import { token } from '../hooks.server';

// Getting the home page directly from the ID.

export const load: PageServerLoad = async ({ params }) => {
    const id = '23';
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