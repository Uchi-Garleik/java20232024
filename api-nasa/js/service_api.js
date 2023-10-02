const apiKey = 'g28GX6gxSKluhGQD7GbsoDWyCCfiAXh3uKDEUcEb';
const sol = 1000; // El número de sol que deseas consultar

// URL del API de la NASA
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

// Realizar una solicitud GET utilizando Fetch API
fetch(apiUrl).then((response) => {
  if (!response.ok) {
    throw new Error('Error en la solicitud al API');
  }
  return response.json();
})
  .then((data) => {
    console.log(data);
    data.photos.forEach(photo => {

      // CREATE THE DIV THAT'LL CONTAIN EVERYTHING
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("photo-div");

      // MAKE DIV FOR THE IMAGE
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image-div")

      // GET THE IMAGE
      const image = document.createElement("img");
      image.src = photo.img_src;
      image.classList.add("img-mars");

      // MAKE DIV FOR THE TEXT
      const textDiv = document.createElement("div");
      textDiv.classList.add("text-div")

      // GET THE ROVER WHO TOOK THE PHOTO
      const roverName = document.createElement("p");
      roverName.innerHTML = "<span>Rover Name:</span><br>" +  "<span>" + photo.rover.name + "</span>";

      // GET THE NAME OF THE CAMERA
      const cameraName = document.createElement("p");
      cameraName.innerHTML = "<span>Camera Name:</span><br>" + "<span>" + photo.camera.full_name + "</span>";
      textDiv.append(roverName, cameraName);

      // APPEND STUFF
      imageDiv.append(image);
      photoDiv.append(imageDiv, textDiv);
      document.querySelector('.container').append(photoDiv);
    });
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });