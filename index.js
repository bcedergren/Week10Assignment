// Function to add a new row to the table
function addRow() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  const newRow = `<tr>
                      <td>${name}</td>
                      <td>${age}</td>
                      <td>${email}</td>
                    </tr>`;

  document.getElementById("table-body").innerHTML += newRow;
  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
}

// Handle form submission
document
  .getElementById("data-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addRow();
  });
