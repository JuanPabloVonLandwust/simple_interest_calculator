function compute() {
  const principal = parseInt(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  const interest = principal * years * rate / 100;
  const amount = principal + interest;
  const result = document.getElementById("result");
  const year = new Date().getFullYear() + years;

  if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
  } else {
      result.innerHTML = `If you deposit $<mark>${principal}</mark>,<br>
                          at an interest rate of <mark>${rate}%</mark>.<br>
                          You will recieve an amount of $<mark>${amount}</mark>,<br>
                          in the year <mark>${year}</mark><br>`
  }
} // compute()

function updateRate() {
const rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerHTML = rateval;
} // updateRate()
