function submitEvenet(e) {
  e.preventDefault();
  var a = document.getElementById('name').value;
  var b = document.getElementById('age').value;
  var c = document.getElementById('mobile').value;
  // var d = document.getElementById('password').value;

  console.log(a,b,c);
}

// onchage Event
function chooseOption() {
  console.log("onchange event occure");

  console.log(document.getElementById("choose").value);
}
// onkeypress event
function presskey() {
  console.log("keypressed event occure")
}
// onkeydown event
function KeyDown() {
  console.log("onkeydown Event occure");
}
// onclicke event
function ClickMe() {
  console.log("you clicked on mouse");
}

// onmouseover event
function OnMouseOverEvent() {
  console.log("mouse over");
}
// ondblclick event

function dblclickMe() {
  console.log("You double clicked the button");
}

// submit event
var ele = document.getElementById('frm1')
ele.addEventListener('submit',submitEvenet);