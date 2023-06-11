// //  var count = 0;
// //        function allowDrop(ev) {
// //           ev.preventDefault();
// //        }
// //        function dragStart(ev) {
// //          ev.dataTransfer.setData("text", ev.target.id);
// //       }
// //       function dragDrop(ev) {
// //          ev.preventDefault();


// //         const id = ev.dataTransfer.getData("text");

// //         if (id.startsWith("dragged") || !id) {
// //              return;
// //         }

// //          const nodeCopy = document.getElementById(id).cloneNode(true);

// //          nodeCopy.id = "dragged" + id + count++;

// //          nodeCopy.addEventListener("dragstart", dragStart);

// //          ev.target.appendChild(nodeCopy);
// //       }

// //       function deleteDiv(ev) {
// //          ev.preventDefault();

// //          const id = ev.dataTransfer.getData("id");

// //         if (!id.startsWith("dragged")) {
// //             return;
// //          }
// //          const el = document.getElementById(id);
// //           el.parentNode.removeChild(el);
// //       }


// // function allowDrop (ev) {
// //   ev.preventDefault();
// // }
 
// //  function dragStart (ev) {
// //   ev.target.style.position = 'relative';
// //   ev.dataTransfer.setData ("text",  ev.target.id);
// // }
// //  function dragDrop (ev) {
// //   ev.preventDefault ();  
// //   var data =  ev.dataTransfer.getData ("text");  
// //    ev.target.appendChild (document.getElementById(data));
// //   }


// // let subjectCounts = {};

// // function drag(ev) {
// //   ev.dataTransfer.setData("text", ev.target.id);
// // }

// // function allowDrop(ev) {
// //   ev.preventDefault();
// // }

// // function drop(ev) {
// //   ev.preventDefault();
// //   const data = ev.dataTransfer.getData("text");
// //   const card = document.getElementById(data);

// //   // Check if the dropped card is already present twice
// //   if (subjectCounts[data] && subjectCounts[data] >= 2) {
// //     alert("You have reached the limit of cards");
// //     return;
    
// //   }

// //   const rowId = ev.target.id;

// //   // Check if the row already has a card of the same subject
// //   const existingCard = document.querySelector(`#${rowId} .card#${data}`);
// //   if (existingCard) {
// //     return;
    
// //   }

// //   // Add the card to the table row
// //   const row = document.getElementById(rowId);
// //   row.appendChild(card.cloneNode(true));

// //   // Update subject count
// //   subjectCounts[data] = (subjectCounts[data] || 0) + 1;
// // }






// let subjectCounts = {};

// function drag(ev) {
//   ev.target.style.position = 'relative';
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drop(ev) {
//   ev.preventDefault();
//   const data = ev.dataTransfer.getData("text");
//   const card = document.getElementById(data);

//   // Check if the dropped card is already present twice
//   if (subjectCounts[data] && subjectCounts[data] >= 2) {
//     alert("You have reached the limit of cards");
//     return;
    
//   }

//   const rowId = ev.target.id;

//   // Check if the row already has a card of the same subject
//   const existingCard = document.querySelector(`#${rowId} .card#${data}`);
//   if (existingCard) {
//     return;
    
//   }

//   // Add the card to the table row
//   const row = document.getElementById(rowId);
//   row.appendChild(card.cloneNode(true));

//   // Update subject count
//   subjectCounts[data] = (subjectCounts[data] || 0) + 1;
// }





let subjectCounts = {};

function drag(ev) {
  ev.target.style.position = 'relative';
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const card = document.getElementById(data);
  const rowId = ev.target.id;

  // Check if the row already has two cards of the same subject
  const subjectCount = Object.values(subjectCounts).reduce((sum, row) => sum + (row[data] || 0), 0);
  if (subjectCount >= 2) {
    alert("You have reached the limit of cards for this subject");
    return;
  }

  // Check if the row already has a card of the same subject
  const existingCard = document.querySelector(`#${rowId} .card#${data}`);
  if (existingCard) {
    return;
  }

  // Add the card to the table row
  const row = document.getElementById(rowId);
  row.appendChild(card.cloneNode(true));

  // Update subject count
  subjectCounts[rowId] = subjectCounts[rowId] || {};
  subjectCounts[rowId][data] = (subjectCounts[rowId][data] || 0) + 1;
}

