function showInfo(){
    var uname = document.getElementById("username").value;
    var gender = document.getElementsByClassName('gender');  //trả về array có 2 phần tử

    var genderArray = [];

    for (var i = 0; i < gender.length; i++)
    {
        if (gender[i].checked)
        {
            genderArray.push(gender[i].value);
        }
    }

    var hobbies = document.getElementsByClassName('hob');

    var hobbiesArray = [];

    for (var i = 0; i < hobbies.length; i++)
    {
        if (hobbies[i].checked)
        {
            hobbiesArray.push(hobbies[i].value);
        }
    }

    var birth = document.getElementById('birthday').value;
    var add = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("cities").value;
    var com = document.getElementById("com").value;





    alert("This page says:" + "\nMember Information" + "\n-------------" + "\nName: " + uname + "\nGender: " + genderArray + "\nHobbies: " + hobbiesArray + "\nBirthday: " + birth + "\nAddress: " + add + "\nEmail: " + email + "\nPhone: " + phone + "\nCity: " + city + "\nComment: " + com);
}