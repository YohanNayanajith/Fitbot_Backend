let btnAdd = document.querySelector('button');
let table = document.querySelector('add_meal_table');


let nameInput = document.querySelector('#name');
let quanInput = document.querySelector('#quan');


$(document).ready(function(){
    $('#meal_add_instructor').click(function(){
        let name = nameInput.value;
        let quan = quanInput.value;

        let template = `
                    <tr>
                        <td>${name}</td>
                        <td>${quan}</td>
                    </tr>`;

        table.innerHTML += template;
    });
});
