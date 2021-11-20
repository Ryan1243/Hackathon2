function SearchPhotos() {
	let clientId = "uO_NQiFaaTs60GVW1Ywmo2ikpaI-AHPbxjDO5h_eTwQ"
	let query = document.getElementById("search").value;
	let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;

	// make a request to API

	fetch(url)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		console.log(data);

		data.results.forEach(photo => {

			let result = `
			<img src="${photo.urls.regular}">
			<a href="${photo.links.download}">
			`;

			$("#result").append(result);


		});
	});
}
