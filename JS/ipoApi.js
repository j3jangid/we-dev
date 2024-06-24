const url = 'https://upcoming-ipo-calendar.p.rapidapi.com/ipo-calendar';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd422f88e17msh3e105602ae855f4p16d701jsn4cd091a93d7b',
		'x-rapidapi-host': 'upcoming-ipo-calendar.p.rapidapi.com'
	}
};

const getApi = async () => {
    try {
        const result = await fetch(url, options);
        let data = await result.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

getApi();