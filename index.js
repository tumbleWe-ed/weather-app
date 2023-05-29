

let requierdDataObj = {
    temp_c: 'temperature',
    wind_speed:'wind speed',
    local_time:'local time',
    name:'name'
    
}

async function getInfoAsync(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e339348a7d6b4e7884b161812231405&q=${city}`,{mode: 'cors'});
    const json = await response.json();
    console.log(json)
    requierdDataObj.temp_c = json.current.temp_c;
    requierdDataObj.wind_speed = json.current.wind_kph;
    requierdDataObj.local_time = json.location.localtime;
    requierdDataObj.name = json.location.name;
    console.log(requierdDataObj)
}

getInfoAsync('london')
