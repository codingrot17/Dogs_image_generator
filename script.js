function apeImage(){
  const response = fetch('https://dog.ceo/api/breeds/image/random').then((res) => {
    const data = res.json();
    return data;
  }).then((dataObj) => {
    const imageEl = document.getElementById('images');
    imageEl.src = dataObj.message;
    // console.log(dataObj.message);
  })
}

const button = document.getElementById('button');
button.addEventListener('click', apeImage);