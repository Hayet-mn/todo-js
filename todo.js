document.querySelector(".btn").addEventListener("click", function(event) {
  var task = document.getElementById("task");

  if (task.value === "") {
    alert("please enter new task ");
  } else {
    test();
  }
  event.stopPropagation((task.value = ""));
});

function test() {
  var task = document.getElementById("task");

  var listDiv = document.createElement("li");

  listDiv.classList.add("listeItem");
  var newDiv = document.createElement("div");

  var lineDiv = document.createElement("div");
  lineDiv.style.marginBottom = "20px";
  lineDiv.classList.add("divLine");

  listDiv.appendChild(lineDiv);

  lineDiv.appendChild(newDiv);

  var btn1 = document.createElement("BUTTON");

  btn1.innerHTML = "Complete";

  btn1.classList.add("btn-complete");

  var btn2 = document.createElement("BUTTON");
  btn2.innerHTML = "Delete";

  btn2.classList.add("btn-delete");

  var x = document.createElement("SPAN");
  x.classList.add("item");

  x.innerHTML = task.value;

  newDiv.appendChild(btn1);
  newDiv.appendChild(btn2);
  newDiv.appendChild(x);
  document.getElementById("tle").appendChild(listDiv);

  var lineText = Array.from(document.querySelectorAll(".btn-complete"));
  var lineremove = Array.from(document.querySelectorAll(".btn-delete"));

  // for (let i=0;i<lineText.length;i++)
  for (let el of lineText) {
    el.addEventListener("click", function() {
      if (el.parentElement.style.textDecoration === "none") {
        el.parentElement.style.textDecoration = "line-through";
        el.innerHTML = "Undo";
      } else {
        el.parentElement.style.textDecoration = "none";
        el.innerHTML = "Complete";
      }
    });
  }

  for (let el of lineremove) {
    el.addEventListener("click", function() {
      el.parentElement.remove();
    });
  }
}
