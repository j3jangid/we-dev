const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '75f58ed787msh30cc6cc02aef9cap116f6bjsn5a88408e2df1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getApi = async () =>{
    try {
        let result =await fetch(url, options);
        let final = await result.json();
        for (const i of final) {
            // console.log(i,final[i]);
        }
        console.log(final);
    } catch (error) {
        console.log(error);
    }


}

getApi();