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
    event.target.parentNode.parentNode.remove()

}