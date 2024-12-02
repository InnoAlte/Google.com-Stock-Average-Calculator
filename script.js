document.getElementById('quantity-1').addEventListener('input', updateFirstBuyTotal);
document.getElementById('price-1').addEventListener('input', updateFirstBuyTotal);
document.getElementById('quantity-2').addEventListener('input', updateSecondBuyTotal);
document.getElementById('price-2').addEventListener('input', updateSecondBuyTotal);

function updateFirstBuyTotal() {
  const quantity1 = parseFloat(document.getElementById('quantity-1').value) || 0;
  const price1 = parseFloat(document.getElementById('price-1').value) || 0;
  const total1 = quantity1 * price1;
  document.getElementById('total-1').textContent = total1.toFixed(2);
}

function updateSecondBuyTotal() {
  const quantity2 = parseFloat(document.getElementById('quantity-2').value) || 0;
  const price2 = parseFloat(document.getElementById('price-2').value) || 0;
  const total2 = quantity2 * price2;
  document.getElementById('total-2').textContent = total2.toFixed(2);
}

document.getElementById('calculate-average').addEventListener('click', function() {
  const quantity1 = parseFloat(document.getElementById('quantity-1').value) || 0;
  const price1 = parseFloat(document.getElementById('price-1').value) || 0;
  const quantity2 = parseFloat(document.getElementById('quantity-2').value) || 0;
  const price2 = parseFloat(document.getElementById('price-2').value) || 0;

  const totalQuantity = quantity1 + quantity2;
  const totalInvestment = (quantity1 * price1) + (quantity2 * price2);
  const averagePrice = totalQuantity > 0 ? totalInvestment / totalQuantity : 0;

  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-investment').textContent = totalInvestment.toFixed(2);
  document.getElementById('average-price').textContent = averagePrice.toFixed(2);
});

document.getElementById('clear-fields').addEventListener('click', function() {
  document.getElementById('quantity-1').value = '';
  document.getElementById('price-1').value = '';
  document.getElementById('quantity-2').value = '';
  document.getElementById('price-2').value = '';
  document.getElementById('total-1').textContent = '0';
  document.getElementById('total-2').textContent = '0';
  document.getElementById('total-quantity').textContent = '0';
  document.getElementById('total-investment').textContent = '0';
  document.getElementById('average-price').textContent = '0';
});
