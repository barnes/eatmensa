import type { PageServerLoad } from '$lib/types';
import { token } from '../../hooks.server';

export const load: PageServerLoad = async ({ params }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);



    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    const response = await fetch(`http://barnescreate.com/graphql/wp-json/wp/v2/menu_item?mo_rest_api_test_config=jwt_auth`, requestOptions);
    const [page] = await response.json();

    return {
        
            page
    }
}