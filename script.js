const apiKey = 'dc56d7612ffc49dbb6e2932f1bc16625';
const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.getElementById("input")
const shortenBtn = document.getElementById("shorten")
const shortenUrl = () => {
    const urlToShorten = inputField.value
    const data = JSON.stringify({ destination: urlToShorten });
    const xhr = new XMLHttpRequest()
    xhr.responseType = "json";
    xhr.open("POST", url)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey)
    xhr.send(data)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }
    console.log(xhr)
}
shortenBtn.addEventListener("click", displayShortUrl)