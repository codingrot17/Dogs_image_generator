function apeImage(){
  const response = fetch('https://dog.ceo/api/breeds/image/random').then((res) => {
    const data = res.json();
    return data;
  }).then((dataObj) => {
    // for dog Image 
    const imageEl = document.getElementById('images');
    imageEl.src = dataObj.message;
    // for dog name
    let dogers = dataObj.message;
    dogers = dogers.split('/')
    const dogName = dogers[dogers.length-2];
    const nameOfDog = document.getElementById('name');
    nameOfDog.textContent = dogName;
  })
}

const button = document.getElementById('button');
button.addEventListener('click', apeImage);