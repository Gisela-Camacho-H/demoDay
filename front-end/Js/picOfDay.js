async function sendApiRequest(){
    let Api_key = 'vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u';
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${Api_key}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}
function useApiData(data){
    document.querySelector("#title").innerHTML = data.title
    document.querySelector("#date").innerHTML = data.date
    document.querySelector("#description").innerHTML = data.explanation
    document.querySelector("#photo").innerHTML = `<img width=400px src="${data.url}">`
}
sendApiRequest()

