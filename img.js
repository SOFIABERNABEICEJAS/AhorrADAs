const imagenAnimada = document.getElementById("animado");
var animation = bodymovin.loadAnimation({
	container: imagenAnimada, // Required
	path: "https://assets3.lottiefiles.com/packages/lf20_c8ofxiyl.json", // Required
	renderer: "svg", // Required
	loop: true, // Optional
	autoplay: true, // Optional
	name: "finance", // Name for future reference. Optional.
});
