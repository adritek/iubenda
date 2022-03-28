const form = document.querySelector('form');
form.addEventListener(
  'submit',
  (e) => {
    const data = new FormData(form);
    let output = '';
    for (let entry of data) {
      output = output + entry[0] + '=' + entry[1] + '\n';
    }
    console.log(output);
    e.preventDefault();
  },
  false
);
