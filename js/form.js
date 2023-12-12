const form = document.querySelector("form");
const emailPattern = /^(.+)@([^\.].*)\.([a-z]{2,})$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  if (name.value === "") {
    alert("Please enter a name.");
  } else if (emailPattern.test(email.value)) {
    alert(
      "Submission of " +
        name.value +
        ", and email " +
        email.value +
        " successful."
    );
    form.reset();
  }
});
