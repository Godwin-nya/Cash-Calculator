function calculateTotalCash() {
  const allPiecesInputs = document.querySelectorAll(".pieces-input");

  let totalSum = 0;
  allPiecesInputs.forEach((input) => {
    const billValue = Number(input.getAttribute("data-size"));
    const pieceCount = Number(input.value) || 0;

    const rowTotal = billValue * pieceCount;

    document.getElementById(`display-${billValue}`).value = rowTotal;
    totalSum += rowTotal;
  });

  document.getElementById("grand-total").textContent = totalSum;
}
