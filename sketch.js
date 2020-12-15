// const question = document.getElementById("question");

function submitQuestion(){
    const question = document.getElementById("question");
    const q = question.value;
    if(q.value !== ' '){
        document.cookie=`question=${q}; expires=${in_an_hour()}`;
        // console.log(q);
        // console.log("cookie:", document.cookie);
        window.location.assign("ChasmOfThought.html");
    }
    else{
        alert('please ask a question');
    }
}


function in_an_hour(){
    let in_an_hour = new Date();
    in_an_hour.setHours(in_an_hour.getHours() + 1);
    return in_an_hour.toUTCString();
}

