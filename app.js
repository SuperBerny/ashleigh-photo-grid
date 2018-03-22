const imageDiv = document.getElementById("images");
const column  = document.getElementsByClassName("column");

function randomSize(min, max) {
   return Math.round(Math.random() * (max - min) + min);
};

// for(i = 0; i < 10; i++) {
//    var width = randomSize(200,500);
//    var height = randomSize(200,500);
 
//    var image = document.createElement("img");
//    image.src = `https://placeimg.com/${width}/${height}/people`;
//    imageDiv.appendChild(image);

// }

$('.column').each(function(i, obj) {
   for(i = 0; i < 4; i++) {
   var width = randomSize(480,640);
   var height = randomSize(480,640);
 
   var image = document.createElement("img");
   image.className="image";
   image.src = `https://placeimg.com/${width}/${height}/people`;
   $(this).append(image);

}
})
