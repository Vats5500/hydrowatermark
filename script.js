function calculateTotal() {
  const quantity = document.getElementById("quantity").value;
  const costPerLabel = document.getElementById("costPerLabel").value;
  const resultDiv = document.getElementById("result");

  if (!quantity || !costPerLabel || quantity <= 0 || costPerLabel <= 0) {
    resultDiv.innerHTML = "❌ Please enter valid positive values.";
    resultDiv.style.color = "red";
    return;
  }

  const totalCost = quantity * costPerLabel;
  resultDiv.innerHTML = `✅ Total Estimated Label Cost: ₹${totalCost.toFixed(2)}`;
  resultDiv.style.color = "#00796b";
}
