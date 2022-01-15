async function sendApiRequest(){
    let Api_key = 'vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u';
    let response = await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${Api_key}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}
function useApiData(data){
    document.querySelector("#date1").innerHTML = data.photos[0].earth_date
    document.querySelector("#description1").innerHTML = data.photos[0].id
    document.querySelector("#photo1").innerHTML = `<img width=400px src="${data.photos[0].img_src}">`
    document.querySelector("#date2").innerHTML = data.photos[10].earth_date
    document.querySelector("#description2").innerHTML = data.photos[10].id
    document.querySelector("#photo2").innerHTML = `<img width=400px src="${data.photos[10].img_src}">`
}
sendApiRequest()
