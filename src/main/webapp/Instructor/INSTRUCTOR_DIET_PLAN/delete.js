

var index, table = document.getElementById('table');
for(var i = 0; i < table.rows.length; i++)
{
    table.rows[i].cells[2].onclick = function()
    {
        var c = confirm("Do you want to delete this row?");
        if(c === true)
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }
        
    };
    
}