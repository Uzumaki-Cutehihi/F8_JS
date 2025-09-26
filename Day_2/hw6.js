let rows = document.querySelectorAll("table tr");

rows.forEach((row, rowIndex) => {
  let cells = row.querySelectorAll("td");
  cells.forEach((cell, colIndex) => {
    if ((colIndex + rowIndex) % 2 == 1) {
      cell.style.backgroundColor = "black";
    }
  });
});
