const sections = document.querySelectorAll("section");
// console.log(sections);
// এখানে যেহেতু NodeList পাচ্ছি তাই  for of ও for each দুইয়টাই মারা যায়।
// কিন্তু HTMLCollections -এ শুধু  for of মারা যায়।

// for of

for (const section of sections) {
  //   console.log(section);
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "7px";
  section.style.backgroundColor = "lightgray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "lightpink";

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-align");
placesContainer.classList.remove("large-text");
