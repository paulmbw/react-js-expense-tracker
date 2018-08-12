
const APIKEY = '4f87daf92005457ca0ef1b7644b75359';

const result = fetch(`http://api.openweathermap.org/data/2.5/weather?q=Spain&APPID=${APIKEY}`);

result.then(res => {
    console.log(res.json());
})
