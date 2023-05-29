/**async function getInfoAsync(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e339348a7d6b4e7884b161812231405&q=${city}`,{mode: 'cors'})
    const json = await response.json()
    console.log('Async',json)
}
getInfoAsync('New-york')**/

async function getInfo(city) {
        return new Promise((resolve) => {
            resolve(response = fetch(`https://api.weatherapi.com/v1/current.json?key=e339348a7d6b4e7884b161812231405&q=${city}`,{mode: 'cors'}))
    })
}


function infoToJson(city) {
    return new Promise (resolve => {
        resolve(getInfo(city)
            .then(response => response.json())
            .then(responseJson => {json = responseJson; return {json}}))
    })
    /**await getInfo(city)
        .then(response => response.json())
        .then(responseJson => {json = responseJson; return json})**/
    //await console.log(json)
}

async function getData(city) {
    let newCity = await infoToJson('london')
    await console.log(newCity.json.current.temp_c)
}

getData('london')

