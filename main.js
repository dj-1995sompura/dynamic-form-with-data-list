var email = document.getElementById('emailInput');
var userName = document.getElementById('nameInput');
var button = document.getElementsByClassName('btn-submit')[0];
var tableBody = document.querySelector('tbody');
var tableRow = document.querySelector('tbody tr');


// eventListeners
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let formdata ={};
    formdata={
        Email:email.value,
        Name:userName.value
    }
    // console.log(formdata);
    let sr_no = tableRow.length + 1;
    addData(formdata, sr_no);
});




// functions
function addData(formdata,index){
    const {Email,Name} = formdata;
    // console.log(Email);
    let userData = `<th scope="row">${index}</th>
            <td>${Email}</td>
            <td>${Name}</td>`;
    // console.log(tableData);
}