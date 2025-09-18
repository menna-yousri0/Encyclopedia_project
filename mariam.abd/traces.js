document.addEventListener('DOMContentLoaded', function() {
    const cards=document.querySelectorAll('.card');
    const pages =[
        'choose.html',
        'asia.html',
        'North_america.html',
        'South_america.html'
    ];
    cards.forEach(function(card,index) {
        card.addEventListener('click',function() {
            window.location.href =pages[index];
        });
    });   
 });

 document.addEventListener('DOMContentLoaded', function() {
    const contents=document.querySelectorAll('.content');
    const choices=[
        'africa.html',
        'morocco.html',
        'kenya.html'
    ];
    contents.forEach(function(content,index) {
        content.addEventListener('click',function() {
            window.location.href=choices[index];
        });
    });
 });