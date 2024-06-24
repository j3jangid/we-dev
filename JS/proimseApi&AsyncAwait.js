const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '75f58ed787msh30cc6cc02aef9cap116f6bjsn5a88408e2df1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getApi = async () => {
    try {
        const response = await fetch(url, options);
        let res = await response.json()
        console.log(res);
        // response.then((e) => {
        //     let result = e.text()
        //     result.then((res) => {
        //         console.log(JSON.parse(res));
        //     })
        // })

    } catch (error) {
        console.error(error);
    }
}

getApi()