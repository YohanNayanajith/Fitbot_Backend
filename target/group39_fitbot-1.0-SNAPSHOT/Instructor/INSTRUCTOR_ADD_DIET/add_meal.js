let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let quanInput = document.querySelector('#quan');


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let quan = quanInput.value;

    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${quan}</td>
                </tr>`;

    table.innerHTML += template;
});