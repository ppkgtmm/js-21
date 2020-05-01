(() => {
        const key = "d7a4d25b-b1f3-487b-a106-25fdb6e3938a";
        async function getAirQuality({city,state,country}){
            const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`);
            const {data: { current }} = await response.json();
            const {pollution,weather} = current;
            // console.log(pollution,weather)
            return {
                aqi:pollution.aqius,
                temp:weather.tp,
                humidity: weather.hu,
                wind: weather.ws
            }
    }
    function setAirQualityColor(aqi) {
            if(aqi<=50){
                document.documentElement.style.setProperty('--current-aqi-color','var(--good-aqi-color)')
            }
            else if(aqi<=100){
                document.documentElement.style.setProperty('--current-aqi-color','var(--medium-aqi-color)')
            }
            else {
                document.documentElement.style.setProperty('--current-aqi-color','var(--bad-aqi-color)')
            }
    }
    function displayAirQuality({state,country,city,aqi,temp,humidity,wind}){
            const cityElem = document.querySelector('.city');
            const stateCountry = document.querySelector('.state-country');
            const aqiElem = document.querySelector('.aqi > h1');
            const tempElem = document.querySelector('.temperature');
            const humidityElem = document.querySelector('.humidity');
            const windElem = document.querySelector('.wind');
            cityElem.innerText = city;
            stateCountry.innerText = state+", " + country;
            aqiElem.innerText = aqi;
            tempElem.innerText = "Temp: "+temp;
            humidityElem.innerText = "Humidity: "+humidity+"%";
            windElem.innerText = "Wind: "+wind+" m/s";
    }
        async function run() {
            const city = 'Sathon';
            const state = 'Bangkok';
            const country = 'Thailand';
            const {aqi,temp,humidity,wind} = await getAirQuality({city,state,country});
            displayAirQuality({state,country,city,aqi,temp,humidity,wind});
            setAirQualityColor(aqi);
        }
        run();
})();
