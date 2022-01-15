async function sendApiRequest(e=undefined){
    // console.log(e.target.value);
    console.log(e == undefined);
    if (e == undefined){
        let Api_key = 'vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u';
        let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${Api_key}`);
        console.log(response)
        let data = await response.json()
        console.log(data)
        useApiData(data)
    } else {
        let Api_key = 'vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u';
        let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${Api_key}&date=${e.target.value}`);
        console.log(response)
        let data = await response.json()
        console.log(data)
        useApiData(data)
    }
    // https://api.nasa.gov/planetary/apod?api_key=vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u&date=2021-05-05
    
}
function useApiData(data){
    document.querySelector("#title").innerHTML = data.title
    document.querySelector("#date").innerHTML = data.date
    document.querySelector("#description1").innerHTML = data.explanation
    if (data.media_type == 'video'){
        document.querySelector("#photo").innerHTML = `<iframe width=400px src="${data.url}">`
    }else {
        document.querySelector("#photo").innerHTML = `<img width=400px src="${data.url}">`
    }
}
sendApiRequest()


