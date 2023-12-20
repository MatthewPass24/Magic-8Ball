function shakeMagic8Ball(){


    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList = 'Display text-danger'
        document.getElementById('response-image').src = 'images/cancel.png' 
        return
    }

    if(!question.trim()){
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random()*8);
    let answer, image, color;

    switch (randomNumber){
        case 0:
            answer = "Yes"
            image = "images/check.png" //change this!!
            color = "text-success"
            break;
        case 1:
            answer = "No"
            image = "images/no.png" //change this!!
            color = "text-danger"
            break;
        case 2:
            answer = "Ask again later"
            image = "images/redo.png" //change this!!
            color = "text-secondary"
            break;
        case 3:
            answer = "Maybe"
            image = "images/shrugging.png" //change this!!
            color = "text-warning"
            break;
        case 4:
            answer = "Do not count on it"
            image = "images/don't.png" //change this!!
            color = "text-muted"
            break;
        case 5:
            answer = "My sources say it is likely"
            image = "images/stacked-book-clipart-10 (2).png" //change this!!
            color = "text-muted"
            break;
        case 6:
            answer = 'Outlook not so good'
            image = "images/outlook.png" //change this!!
            color = "text-danger"
            break;
        case 7:
            answer = 'Signs point to yes'
            image = "images/yes.png" //change this!!
            color = "text-success"
            break; 
        default:
            break;    
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-6 ${color}`;
document.getElementById('response-image').src = image;

}
