﻿let userAge = prompt("Пожалуйста, введите ваш возраст:");
if (userAge >= 18) {
    alert("Приветствуем на LifeSpot! " +
        new Date().toLocaleString());
} else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}