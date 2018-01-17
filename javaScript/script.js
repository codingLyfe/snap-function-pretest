window.onload = function () {
	document.getElementById("input-form").addEventListener("submit", function(evt) {
		evt.preventDefault();

			let answer = document.getElementById("input-form");

			if(answer == "42"){
				console.log("True");
			} else {
				console.log("False");
			}

	})
};




