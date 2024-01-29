// // Страницы из списка исполнителей 
// var basta = document.getElementById('basta');
// var SerLaz = document.getElementById('SerLaz');
// var maks = document.getElementById('maks');
// var leps = document.getElementById('leps');
// // Страницы из списка альбомов
// var spring = document.getElementById('spring');
// var Party = document.getElementById('Party'); 
// var dance = document.getElementById('dance');
// var weekends = document.getElementById('weekends');
// // Страницы из меню пользователя 
// var trecks = document.getElementById('trecks');
// var alboms = document.getElementById('alboms');
// var down = document.getElementById('down');
// Переход на страницу загруженных песен
function Ispolnitel(){
    document.getElementById('basta').onclick = function (){
        window.location.href = 'basta.html';
    }
    // Переход на страницу с альбомами
    document.getElementById('SerLaz').onclick = function (){
        window.location.href = 'serlaz.html';
    }
    // Переход на страницу с треками
    document.getElementById('maks').onclick = function (){
        window.location.href = 'macsim.html';
    }
    // Переход на страницу с треками
    document.getElementById('leps').onclick = function (){
        window.location.href = 'leps.html';
    }
}
function Playlist(){
    // Переход на страницу загруженных песен
    document.getElementById('spring').onclick = function (){
        window.location.href = 'spring.html';
    }
    // Переход на страницу с альбомами
    document.getElementById('Party').onclick = function (){
        window.location.href = 'party.html';
    }
    // Переход на страницу с треками
    document.getElementById('dance').onclick = function (){
        window.location.href = 'dance.html';
    }
    // Переход на страницу с треками
    document.getElementById('weekends').onclick = function (){
        window.location.href = 'weekends.html';
    }
}
function myMusics(){
    // Переход на страницу загруженных песен
    document.getElementById('down').onclick = function (){
        window.location.href = 'downtrack.html';
    }
    // Переход на страницу с альбомами
    document.getElementById('alboms').onclick = function (){
        window.location.href = 'alboms.html';
    }
    // Переход на страницу с треками
    document.getElementById('trecks').onclick = function (){
        window.location.href = 'trecks.html';
    }
}