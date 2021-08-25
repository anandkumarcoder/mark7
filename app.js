const inputArea   = document.querySelector("#inputArea");
const  outputArea = document.querySelector("#outputArea");
const translateBtn  = document.querySelector("#translate");

const serverApi = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text){
    return serverApi + "?" +"text=" + text
};


function errorHandler(error){
    console.log("error occured", error)
    alert("something worng with the server try again later")
}

translateBtn.addEventListener("click",clickhandler);

function clickhandler(){
    var inputText = inputArea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;

        outputArea.innerText = translatedText
    })
    .catch(errorHandler)
    
}

