
document.addEventListener('DOMContentLoaded', function() {
    let question = document.getElementById('poll__title');
    let answer = document.getElementById('poll__answers');
    (async () => {
    let response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    if (response.ok) { 
        let json = await response.json();
        json = JSON.stringify(json);
        let object = JSON.parse(json);
        question.innerText = object.data.title;
        for(el of object.data.answers){
            let button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = el;
            answer.append(button);
        }
    } else {
    alert("Ошибка HTTP: " + response.status);
    }
    })()

    document.addEventListener('click', e => {
    allButtons = document.querySelectorAll('.poll__answer');
    for(el of allButtons){
        if(e.target.textContent == el.textContent){
            alert('Спасибо, ваш голос засчитан!');
        }
    }})
})

