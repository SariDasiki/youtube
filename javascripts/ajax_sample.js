let number= 0;
let data= [];

const button= document.getElementById('btn');
const titleArea= document.getElementById("title");
const contentArea= document.getElementById("content");
const videoArea= document.getElementById("video");

function getData() {
  const request=new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState== 4) {
      if(request.status== 200) {
        data= request.response;
        
          titleArea.innerHTML= request.response[number].title;
          contentArea.innerHTML= request.response[number].content;
          videoArea.setAttribute("src", request.response[number].url);
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType= "json";
  request.send(null);
}


function changeVideo() {
  if (data.length < 1) getData()
  button.addEventListener('click', e => {
  number == 2 ? (number = 0) : number++;
  titleArea.innerHTML= data[number].title;
  contentArea.innerHTML= data[number].content;
  videoArea.setAttribute("src", data[number].url);
  
  })
}

window.onload = changeVideo;