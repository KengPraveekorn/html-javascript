// --- window.onload เมื่อโหลด html --- //
// window.onload = function(){
//     let msg = "Hello World"
//     alert(msg)
// }

function showMessage() {
    // --- get value into msg --- //
    let msg = document.getElementById('mytext').value;

    // --- innerHTML is in tag HTML --- //
    let headText = document.getElementById('headText');
    headText.innerHTML = msg;
    // alert(msg)
}

function submitForm() {
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;

    // -- (ถ้าไม่ใส่ return false จะขึ้นแบบนี้) -> http://127.0.0.1:5500/index.html?email=jkjkj&password= -- //
    if(email === ""){
        alert("Email must be filled out")
        return false
    }else if(password === ""){
        alert("password must be filled out")
        return false
    }

    return false
}

window.onload = function() {
    // -- สร้าง object ขึ้นมาโดย XMLHttpRequest -- //
    let xhttp = new XMLHttpRequest();

    // -- เรียก api -- //
    xhttp.open("GET","https://www.melivecode.com/api/users");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        // -- state จะมี 0-4 4 คือ request เสร็จแล้ว -- //
        if(this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);

            // -- เข้าถึง ul id ที่ชื่อ userlist -- //
            let userList = document.getElementById('userlist');
            data.map(user =>{
                console.log(user.username);
                // -- สร้าง li ใน ul -- //
                let newListItem = document.createElement('li');
                // -- ใส่ข้อมูลใน li -- //
                // newListItem.textContent = user.username;
                newListItem.innerHTML = user.fname + " " + user.lname + " " + user.username;
                newListItem.innerHTML += '<img src="'+user.avatar+'" height="50px"/>';
                // -- appendChild ต่อ li ลงไปจนครบข้อมูลทั้งหมด  -- //
                userList.appendChild(newListItem)
            })
        }
    }
}