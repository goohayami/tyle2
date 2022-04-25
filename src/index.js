const base = document.getElementById("base-tyle");
const one = document.getElementById("copy-one");
const two = document.getElementById("copy-two");

base.addEventListener("click", () => {
  const newBase = document.createElement("div");
  const count1 = one.childElementCount;
  const count2 = two.childElementCount;
  const totalCount = count1 + count2;

  base.textContent = totalCount + 1;
  console.log(totalCount);
  newBase.className = "addNewBase";
  if (totalCount <= 4) {
    one.appendChild(newBase);
  } else if (totalCount < 10) {
    newBase.className = "changeBcolor";
    two.appendChild(newBase);
  } else {
    base.textContent = totalCount;
  }
});
