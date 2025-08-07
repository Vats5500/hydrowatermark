function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const costPerLabel = parseFloat(document.getElementById('costPerLabel').value);
    const designCost = parseFloat(document.getElementById('designCost').value);

    if (isNaN(quantity) || isNaN(costPerLabel)) {
        document.getElementById('result').innerHTML = "❗ Please enter valid values.";
        return;
    }

    const totalLabelCost = quantity * costPerLabel;
    const totalCost = totalLabelCost + (isNaN(designCost) ? 0 : designCost);

    document.getElementById('result').innerHTML = `
        <p>💸 Total Label Cost: ₹${totalLabelCost.toFixed(2)}</p>
        <p>🎨 Designing Cost: ₹${designCost.toFixed(2)}</p>
        <p><strong>📦 Total Projected Cost: ₹${totalCost.toFixed(2)}</strong></p>
    `;
}
