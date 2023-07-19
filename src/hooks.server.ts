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

const getToken = async () => {
    const response = await fetch("http://barnescreate.com/graphql/wp-json/api/v1/token", requestOptions)
    const data = await response.json()
    return data.jwt_token;
}

export const token = await getToken();
