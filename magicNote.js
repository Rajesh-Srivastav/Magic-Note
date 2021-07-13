showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (addTxt.value != "") {
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
  }
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="card text-black border-danger mb-3 noteCard" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"><b>${element}</b></p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-primary">Delete Note</button>
      </div>
    </div>`;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `<div class="my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note</h5>
        <p class="card-text">Your Notes Will Appear Here</p>
        
      </div>
    </div>`;
  }
}

function deleteNote(index) {
  console.log(index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchB = document.getElementById("inputSearch");
searchB.addEventListener("input", function () {
  let inputVal = searchB.value;
  let cards = document.getElementsByClassName("noteCard");
  Array.from(cards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
