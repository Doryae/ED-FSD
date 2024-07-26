const textToCopy = document.querySelectorAll(".coordinate")
const buttonToCopy = document.querySelectorAll(".copyto")

for (let i = 0; i < buttonToCopy.length; i++) {
	buttonToCopy[i].addEventListener("click", () => {
		navigator.clipboard.writeText(textToCopy[i].textContent)
	})
}
