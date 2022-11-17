const doc = document.querySelector(".container");
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState===4) {
        const data = JSON.parse(request.responseText);
        data.forEach(element => {
            doc.innerHTML+=`<p>Name: ${element.name} Surname: ${element.surname}  Age: ${element.age}  Salary: ${element.salary}</p>`
        });
    }
});
request.open('GET', 'main.json');
request.send();