const url = 'https://twelve-data1.p.rapidapi.com/mutual_funds/world/ratings?symbol=VFIAX';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd422f88e17msh3e105602ae855f4p16d701jsn4cd091a93d7b',
		'x-rapidapi-host': 'twelve-data1.p.rapidapi.com'
	}
};

const getApi = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


getApi();