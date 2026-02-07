const form = document.getElementById('safety-form');
const result = document.getElementById('result');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const total = ['q1', 'q2', 'q3', 'q4'].reduce(
    (sum, key) => sum + (data.get(key) ? 1 : 0),
    0,
  );

  let message = '';
  let className = '';

  if (total === 4) {
    className = 'good';
    message = 'Excellent (4/4). Your wallet habits are strong. Keep them consistent.';
  } else if (total >= 2) {
    className = 'warn';
    message = `Moderate (${total}/4). Improve the unchecked items to reduce risk.`;
  } else {
    className = 'risk';
    message = `High risk (${total}/4). Strengthen your wallet security before moving Pi.`;
  }

  result.className = `result ${className}`;
  result.textContent = message;
});
