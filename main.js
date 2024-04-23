// function dialog() {
//     var userName = prompt("Будь ласка, введіть ваше ім'я:", "");
//     if (userName !== null && userName !== "") {
//         alert("Привіт, " + userName + "! Ласкаво просимо на наш сайт!");
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


// let firstString = "hello";
// let secondString = "world";
// function compareStrings(string1, string2) {
//     if (string1 > string2) {
//         alert("Перший рядок \"" + string1 + "\" більший за другий рядок \"" + string2 + "\"");
//     } else if (string2 > string1) {
//         alert("Другий рядок \"" + string2 + "\" більший за перший рядок \"" + string1 + "\"");
//     } else {
//         alert("Рядки рівні за вмістом: \"" + string1 + "\" і \"" + string2 + "\"");
//     }
// }

// compareStrings(firstString, secondString);

// function Info(lastName, firstName, position = "Web Developer") {
//     alert("Інформація про розробника:\n\nПрізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
// }

// Info("Барна", "Юлія");

// document.body.style.background = 'blue';
// setTimeout(() =>
// {
//     document.body.style.background = '';
// }, 30000);

// alert(location.href); // Показує поточний URL

// if (confirm("Перейти на сайт?")) {
//     location.href = "https://uk.javascript.info/"; // Перенаправляє браузер на іншу URL
// }
// let elements = document.querySelectorAll('ul > li:last-child');

// for (let elem of elements) {
//     alert(elem.textContent);
// }
let cont=document.getElementById('container');
cont.style.background = 'white';
// Замінюємо елемент з його зовнішнім HTML вмістом
element.outerHTML = newHTMLContent;


// Створення нового елемента <li>
let newTip1 = document.createElement('li');
let text1 = document.createTextNode('Порада 4: Правильна гігієна');
newTip1.append(text1);

// Створення нового елемента <li> та додавання його до списку
let newTip2 = document.createElement('li');
let text2 = document.createTextNode('Порада 5: Регулярний відпочинок');
newTip2.append(text2);

// Створення нового елемента <li> та додавання його до списку
let newTip3 = document.createElement('li');
let text3 = document.createTextNode('Порада 6: Позитивний настрій');
newTip3.append(text3);

// Знаходження списку за класом та вставка нових елементів у список
let ul = document.querySelector('.health-tips ul');
ul.append(newTip1);
ul.append(newTip2);
ul.append(newTip3);





