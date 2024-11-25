const myButton = document.querySelector("#my-button");
if (myButton) {
  myButton.addEventListener("click", () => {
    console.log("click!!");
  });
} else {
  console.log("no button");
}
