btn1 = document.querySelector(".btn1");
btn3 = document.querySelector('.btn3');
popup = document.querySelector(".popup");
password = document.querySelector(".pass");
check = document.querySelector('.confirm');
nam = document.querySelector('.name')
blam = document.querySelector('.blam');



myStorage = window.localStorage;

if(myStorage.getItem('login') != null && myStorage.getItem('login') == "True"){
    btn1.style.display = 'none';
    btn3.style.display = 'block';
    blam.innerText = `${myStorage.getItem('name')} 님 환영홥니다.`
}else{
    btn1.style.display = 'blcok';
    btn3.style.display = 'none';
    blam.innerText = 'Main'
}

btn1.addEventListener("click", (e) => {
    popup.style.display = 'block';
})

check.addEventListener('click', (e) => {
    e.preventDefault()

    if(password.value.length >= 4){
        alert("인증되었습니다.");
        myStorage.setItem('login', "True");
        myStorage.setItem('name', nam.value)
        location.href = '/soap.html'
    }else{
        alert("비밀번호를 4자리 이상 입력해주세요.");
        password.value = '';
    }
})

btn3.addEventListener('click', (e) => {
    e.preventDefault();
    myStorage.setItem('login', "False");
    location.href = '/soap.html'
})

const asd = fetch("../서울/B/data/soap.json", {method: 'GET'}).then(res => res.json()).then(data => console.log(data))
