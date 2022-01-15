async function sendApiRequest(){
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0MTY1ODU4OCwiZXhwIjoxNjQxNjk0NTg4fQ.MuE3XRlG1DK30QyDSMtpdbMMAvzZSO1FzvV3dwuImb4';
    let url = 'http://localhost:3000/api/posts'
    let response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization': token
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
        });
    // console.log(response)
    let data = await response.json()
    // console.log(data)
    useApiData(data)
}
function useApiData(data){
    const header = document.getElementById("posts")

    // console.log(data.data.rows);

    data.data.rows.forEach(e => {
        console.log(e);
        let title = document.createElement('h2')
        title.innerText = e.title
        title.className = "titlePost"

        let p = document.createElement('p')
        p.innerText = e.description
        p.className = "DescripPost"

        let a= document.createElement('h4')
        a.innerText = e.author
        a.className = "authPost"

        header.appendChild(a)
        header.appendChild(title)
        header.appendChild(p)

    });
}
sendApiRequest()

// Ejemplo fetch con post y body
