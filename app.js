const colorSelect = document.getElementById("color");
const sizeSelect = document.getElementById("size");
const quantityInput = document.getElementById("reason");
const result = document.querySelector(".result");
const checkboxes = document.querySelectorAll(
	'input[type="checkbox"][name="illness"]'
);
const gotowce = document.querySelector(".gotowce");
const resultGotowce = document.querySelector(".resultGotowce");
gotowce.addEventListener("click", (e) => {
	console.log(e.target.textContent);
  resultGotowce.textContent+=`${e.target.textContent} \n`
  e.target.style.backgroundColor='darkgrey'
});

let selectedColor = "";
let selectedSize = "";
let reason = "";
let quantity = 0;
let illness = [];

function update() {
	result.textContent = `Wizyta z powodu dolegliwości ${selectedColor}${selectedSize}.${reason}\n Przewlekle choroby: ${illness.join(
		", "
	)}.`;
}

checkboxes.forEach((box) => {
	box.addEventListener("change", (e) => {
		console.log(e.target.value);
		if (!illness.includes(e.target.value)) {
			illness.push(e.target.value);
		} else {
			console.log(illness.indexOf(e.target.value));
			console.log(illness);
			illness.splice(illness.indexOf(e.target.value), 1);
		}
		update();
	});
});

colorSelect.addEventListener("change", function () {
	selectedColor = colorSelect.value;
	console.log(`Wybrany kolor: ${selectedColor}`);
	update();
});

sizeSelect.addEventListener("change", function () {
	selectedSize = sizeSelect.value;
	console.log(`Wybrany rozmiar: ${selectedSize}`);
	update();
});

quantityInput.addEventListener("change", function () {
	reason = quantityInput.value;
	console.log(`Powód: ${quantity}`);
	update();
});
