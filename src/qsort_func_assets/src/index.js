import { qsort_func } from "../../declarations/qsort_func";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await qsort_func.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
