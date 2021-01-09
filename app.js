const correctAnswers = ["B", "B" , "B" , "B"];                   //1: making an array that will point to the B  answers 
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", e => {                           //2: makign a callback function that will add an event listner that will listen to when the user clicks 
    e.preventDefault();


    let score = 0;
    const userAnaswers = [form.q1.value, form.q2.value, form.q3.value , form.q4.value]    //3: lets track the score by storing it on a variable form: ponts to the addevent listener
                                                                                          //                                                    q1 : points to the first question\
                                                                                         //                                                     value : points to the answer 
    userAnaswers.forEach((answer, index) => {
     if(answer === correctAnswers[index]){
      score += 25;
     }  
    })  
    console.log(score);      
})