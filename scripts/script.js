$(document).ready(function() {
	// clickYes();
	// clickNo();
	getImage();

	$("#classy").click(function() {
		$("link[href='./stylesheets/style1.css']").attr("href", "./stylesheets/style2.css");
	});

	$("#cute").click(function() {
		$("link[href='./stylesheets/style2.css']").attr("href", "./stylesheets/style1.css");
	});

})

// shuffle array
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

// populate array with number of pictures and shuffle
var imageStore;
var imageCount = 12;
imageStore = Array.apply(null, {length: imageCount}).map(Number.call, Number);
imageStore = shuffleArray(imageStore);

// write img src to HTML file with imageStore numbers
// pop from array to avoid repeating consecutive images
// right now imageStore is repopulated every time the page refreshes
function getImage() {
	document.getElementById("image-wrapper").innerHTML += '<img src="img' + imageStore.pop() + '.gif">';
}