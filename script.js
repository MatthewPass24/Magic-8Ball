function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList = 'Display text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //Fix this later//
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
            image = "yes-image.jpg" //change this!!
            color = "text-success"
            break;
        case 1:
            answer = "No"
            image = "no-image.jpg" //change this!!
            color = "text-danger"
            break;
        case 2:
            answer = "Ask again later"
            image = "later-image.jpg" //change this!!
            color = "text-secondary"
            break;
        case 3:
            answer = "Maybe"
            image = "later-image.jpg" //change this!!
            color = "text-muted"
            break;
        case 4:
            answer = "Do not count on it"
            image = "later-image.jpg" //change this!!
            color = "text-muted"
            break;
        case 5:
            answer = "My sources say it is likely"
            image = "later-image.jpg" //change this!!
            color = "text-muted"
            break;
        case 6:
            answer = 'Outlook not so good'
            image = "later-image.jpg" //change this!!
            color = "text-secondary"
            break;
        case 7:
            answer = 'Signs point to yes'
            image = "later-image.jpg" //change this!!
            color = "text-secondary"
            break; 
        default:
            break;    
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}