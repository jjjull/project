// function dialog() {
//     var userName = prompt("Будь ласка, введіть ваше ім'я:", "");
//     if (userName !== null && userName !== "") {
//         alert(`Привіт,${userName} Ласкаво просимо на наш сайт!`);
//     } else {
//         alert("Будь ласка, введіть ваше ім'я, щоб ми могли з вами спілкуватися!");
//     }
    
//     var confirmation = confirm("Ви впевнені, що хочете вийти з сайту?");
//     if (confirmation) {
//         alert("Дякуємо за відвідування нашого сайту. До зустрічі!");
//     } else {
//         alert("Ви залишаєтесь на нашому сайті. Щасливого перегляду!");
//     }
// }
// dialog();


// function Info(lastName, firstName, position = "Web Developer") {
//     alert(`Інформація про розробника:\n\nПрізвище:  ${lastName} \nІм'я: ${firstName }\nПосада: ${position}`);
// }
// Info("Барна", "Юлія", "frontend developer");

// let firstString;
// let secondString;
// function compareStrings(string1, string2) {
//     if (string1 > string2) {
//         alert(`Перший рядок "${string1}" більший за другий рядок  "${string2}"`);
//     } else if (string2 > string1) {
//         alert(`Другий рядок  "${string2}"  більший за перший рядок "${string1}"`);
//     } else {
//         alert("Рядки рівні за вмістом");
//     }
// }
// compareStrings("hello", "world");



// document.body.style.background = 'blue';
// setTimeout(() =>
// {
//     document.body.style.background = '';
// }, 3000);



// if (confirm("Перейти на сайт?")) {
//     location.href = "https://uk.javascript.info/"; // Перенаправляє браузер на іншу URL
// }

// let elements = document.querySelectorAll('ul > li:last-child');
// for (let elem of elements) {
// alert(elem.textContent);
// }

let title= document.getElementById('head');
title.innerHTML = '<h1>Ліки</h1>'; 



let oldOne = document.getElementById('block-small-fourth');

let newOne= `
    <div id="new-block">
      <img src="images/3e777aaf-66d1-4f50-b76c-5066b91ffd7c-medium.webp" alt="" style="width: 170px; height: 135px;">
      <br><span>Назонол спрей назальний 0,1%, 10 мл - Баум Фарм.</span>
            Упаковка: <br>
            <s> 165 грн</s> <br>
           109 грн
    </div>
`;

oldOne.outerHTML = newOne;


let cont=document.getElementById('container');
cont.style.background = 'white';



let newTip1 = document.createElement('li');
let text1 = document.createTextNode('Порада 4: Правильна гігієна');
newTip1.append(text1);

let newTip2 = document.createElement('li');
let text2 = document.createTextNode('Порада 5: Регулярний відпочинок');
newTip2.append(text2);


let newTip3 = document.createElement('li');
let text3 = document.createTextNode('Порада 6: Позитивний настрій');
newTip3.append(text3);

// Знаходження списку за класом та вставка нових елементів у список
let ul = document.querySelector('.health-tips ul');
ul.prepend(newTip1);
ul.append(newTip2);
ul.append(newTip3);


alert(head.textContent);



