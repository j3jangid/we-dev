
const getApi = async () => {
    try {
        const response = await fetch(url, options);
        let res = await response.json()
        console.log(res.temp);
        response.then((e) => {
            let result = e.text()
            result.then((res) => {
                console.log(JSON.parse(res));
            })
        })
        document.getElementById("temp").innerHTML = res.temp
        document.querySelector(".min_temp").innerHTML = res.min_temp
        document.querySelector(".max_temp").innerHTML = res.max_temp

        document.getElementById("humidity").innerHTML = res.humidity
        document.getElementById("wind").innerHTML = res.wind_speed
        document.querySelector(".feels_like").innerHTML = res.feels_like

        document.querySelector(".sunrise").innerHTML = new Date(res.sunrise * 1000).toLocaleTimeString()
        document.querySelector(".sunset").innerHTML = new Date(res.sunset * 1000).toLocaleTimeString()
        document.querySelector(".wind_degrees").innerHTML = res.wind_degrees;

        console.log("running");
    } catch (error) {
        console.error(error);
    }
}

getApi()