/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
function generateExcuse() {
  let pronoun = ["a dog", "i", "he", "she", "that grandpa"];
  let verb = ["ran into", "fell asleep", "slipped on pudding"];
  let where = ["in my driveway", "at the opera", "on a ferris wheel"];
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndex] + " " + verb[verbIndex] + " " + where[whereIndex] + " "
  );
}
