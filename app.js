document.getElementById('card').style.display = 'none'
    // document.getElementById('form').style.display = 'none'


function idCard() {
    document.getElementById('form').style.display = 'none'
    document.getElementById('card').style.display = 'block'
}

function disform() {
    document.getElementById('form').style.display = 'block'
    document.getElementById('card').style.display = 'none'

}

var nameReg = /^[a-zA-Z]+[a-zA-Z]+$/;
var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
var numReg = /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/
var addReg = /^[0-9a-zA-Z\s,-]+$/
var cnicReg = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
var fullName = document.getElementById('name')
var fatherName = document.getElementById('father')
var email = document.getElementById('email')
var number = document.getElementById('number')
var city = document.getElementById('city')
var course = document.getElementById('courses')
var cnic = document.getElementById('cnic')
var add = document.getElementById('add')
var qualification = document.getElementById('qualification')
var pic = document.getElementById('picture')



function getData() {
    if (nameReg.test(fullName.value)) {
        if (nameReg.test(fatherName.value)) {
            if (emailReg.test(email.value)) {
                if (numReg.test(number.value)) {
                    if (city.value) {
                        if (course.value) {
                            if (cnicReg.test(cnic.value)) {
                                if (gender.value) {
                                    if (addReg.test(add.value)) {
                                        if (qualification.value) {
                                            if (pic.value) {
                                                // Further Working Start from here when all fields meet the requirement
                                                Swal.fire(
                                                    'Registered Successfully!',
                                                    fullName.value + ' You can Download Your ID Card ',
                                                    'success'
                                                )
                                                fetchData()

                                            } else {
                                                swal("Picture Missing", "Upload Your Photo", "info");
                                            }

                                        } else {
                                            swal("Enter Qualification", "Select Your Last Qualification", "info");
                                        }
                                    } else {
                                        swal("Invalid Address", "Type Your Address Correctly", "error");
                                    }
                                } else {
                                    swal("Gender Required", "Select your Gender", "info");
                                }
                            } else {
                                swal("Invalid CNIC", "Please Enter CNIC Correct Format ", "info");
                            }
                        } else {
                            swal("Course Not Selected", "Please Select Course", "info");
                        }
                    } else {
                        swal("City Required", "Please Select Your City", "info");
                    }
                } else {
                    swal("Invalid Phone Number", "Write Phone Number Correctly", "info");
                }
            } else {
                swal("Invalid Email", "Please Type Email Correctly", "error");
            }
        } else {
            swal("Invalid Father Name", "Please Type Father Name Correctly", "error");
        }
    } else {
        swal("Invalid Name", "Please Type Your Full Name Correctly", "error");
    }
}


function Student(pic, name, father, number, cnic, course, city, ) {
    this.pic = pic
    this.name = name
    this.father = father
    this.number = number
    this.cnic = cnic
    this.course = course
    this.city = city
}


// var count = 1


var obj;

function fetchData() {
    //     b[`Student ${count}`] = new Student(img, fullName.value, fatherName.value, number.value, cnic.value, course.value, city.value)
    //     localStorage.setItem('data', JSON.stringify(b))
    //     console.log(b)
    //     count++
    // }
    var getData = JSON.parse(localStorage.getItem('data'))
    if (getData === null) {
        obj = {}
    } else {
        obj = getData
    }

    var fullName = document.getElementById('name').value
    var fatherName = document.getElementById('father').value
    var email = document.getElementById('email').value
    var number = document.getElementById('number').value
    var city = document.getElementById('city').value
    var course = document.getElementById('courses').value
    var cnic = document.getElementById('cnic').value
    var add = document.getElementById('add').value
    var qualification = document.getElementById('qualification').value
    var pic = document.getElementById('picture')
    var img = URL.createObjectURL(pic.files[0])


    obj[fullName] = {
        name: fullName,
        father: fatherName,
        mail: email,
        num: number,
        cities: city,
        cor: course,
        nic: cnic,
        addr: add,
        edu: qualification,
        pic: img
    }
    localStorage.setItem('data', JSON.stringify(obj))
    console.log(obj)
}


function checkCard() {
    var cnic = document.getElementById('cnic2')
    if (cnicReg.test(cnic.value)) {
        showCard()
    } else {
        swal("Invalid CNIC", "Please Enter CNIC Correct Format ", "info");
    }
}

function cardReturn() {
    document.getElementById('cardSpace').style.display = 'none'
}


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
            name.innerText = firstName
            var father = document.getElementById('cardFather')
            father.innerText = fatherName
            var coursecheck = document.getElementById('cardCourse')
            coursecheck.innerText = course
            break
        }
    }
}