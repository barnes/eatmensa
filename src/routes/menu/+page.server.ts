import type { PageServerLoad } from '$lib/types';
import { token } from '../../hooks.server';


export const load: PageServerLoad = async ({ params }) => {
    const getData = async (endPoint, token) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        const response = await fetch(`http://barnescreate.com/graphql/wp-json/wp/v2/${endPoint}?mo_rest_api_test_config=jwt_auth`, requestOptions);
        const results = await response.json();
        return results
    };
    
    const items = await getData('menu_item', token);
    const cats = await getData('menu_category', token);
    return{
        items,
        cats
    }
}