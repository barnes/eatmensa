
export const getToken = async () => {
    //get the token
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": "admin",
      "password": "!Phoebe12"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const response = await fetch("http://barnescreate.com/graphql/wp-json/api/v1/token", requestOptions)
    const data = await response.json()
    return data.jwt_token;
}

export const getPages = async (token) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        const response = await fetch(`http://barnescreate.com/graphql/wp-json/wp/v2/pages?mo_rest_api_test_config=jwt_auth`, requestOptions);
        const results = await response.json();
        return results
};


export const token = await getToken();
export const pages = await getPages(token);
