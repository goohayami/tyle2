const base = document.getElementById("base-tyle");
const one = document.getElementById("copy-one");
const two = document.getElementById("copy-two");
const rezult = document.getElementById("rezult");

base.addEventListener("click", () => {
  const newBase = document.createElement("div");
  const count1 = one.childElementCount;
  const count2 = two.childElementCount;
  const totalCount = count1 + count2;

  rezult.textContent = totalCount + 1;
  console.log(totalCount);
  newBase.className = "addNewBase";
  if (totalCount <= 4) {
    one.appendChild(newBase);
  } else if (totalCount < 10) {
    newBase.className = "changeBcolor";
    two.appendChild(newBase);
  } else {
    rezult.textContent = totalCount;
  }
});
