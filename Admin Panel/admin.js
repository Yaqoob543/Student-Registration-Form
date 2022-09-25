var getAdmin = JSON.parse(localStorage.getItem('data'))
var score = 1

for (var keys in getAdmin) {
    console.log(getAdmin[keys])
    document.getElementById('table').children[0].innerHTML +=
        `
        <tr style="text-align: center; class : adminTab">
                    <td>${score}</td>
                    <td><input type = 'text' value = ${getAdmin[keys].name} class = 'adminInp' </input></td>
                    <td><input type = 'text' value = ${getAdmin[keys].father} class = 'adminInp' </input></td>
                    <td><input type = 'text' value = ${getAdmin[keys].num} class = 'adminInp' </input></td>
                    <td><input type = 'text' value = ${getAdmin[keys].cor} class = 'adminInp' </input></td>
                    <td><input type = 'text' value = ${getAdmin[keys].cities} class = 'adminInp' </input></td>
                    <td><input type = 'text' value = ${getAdmin[keys].nic} class = 'adminInp' </input></td>
                    <td><button onclick = "del()" class = 'del' >Delete</button></td>
                </tr>
        `
    score++
}



function del() {
    // event.target.parentNode.parentNode.remove()
    var delOne = event.target.parentNode.parentNode.children[1].firstChild.value
        // console.log(delOne)



    // console.log(JSON.parse(localStorage.getItem('data', )))
    var task = JSON.parse(localStorage.getItem('data'))

    for (var keys in task) {
        if (task[keys].name === delOne) {
            console.log(task[keys])

            if (task[keys].name === delOne) {
                console.log(delOne)
                var a = JSON.parse(localStorage.getItem('data', getAdmin[keys][name]))
                console.log(a)
            }
            // localStorage.removeItem('data', task[keys].name)
        }
        // break
    }


    // console.log(event.target.parentNode.parentNode.children[1])

}








/* 
function showCard() {
    var cnic = document.getElementById('cnic2')
    var check = JSON.parse(localStorage.getItem('data'))
    console.log(check)
    for (var keys in check) {
        if (check[keys].nic === cnic.value) {
            var picture = check[keys].pic
            var firstName = check[keys].name
            var fatherName = check[keys].father
            var course = check[keys].cor
            document.getElementById('cardSpace').style.display = 'block'
            var img = document.getElementById('dp')
            img.src = picture
            var name = document.getElementById('cardName')
            name.innerText = 'Name : ' + firstName
            var father = document.getElementById('cardFather')
            father.innerText = 'Father Name : ' + fatherName
            var coursecheck = document.getElementById('cardCourse')
            coursecheck.innerText = 'Course : ' + course
            break
        }
    }
}

function admin() {
    document.getElementById('card').style.display = 'none'
    document.getElementById('form').style.display = 'none'
    document.getElementById('head').style.display = 'none'
    document.getElementById('adminSpace').style.display = 'block'
}




function adminlog() {
    var user = document.getElementById('adminName').value
    var pass = document.getElementById('adminPass').value
    if (user === 'admin' && pass === 'admin') {
        window.location.href = '/Admin Panel/admin.html'
    } else {
        swal("Invalid Login", "Kindly Enter Correct Credentials", "error");
    }
}

*/