


// JAVASCRIPT FOR SIMPLE CALCULATOR
// const first =document.getElementById('one');
// const second = document.getElementById('two');
// const dis = document.getElementById('screen');
// const caa = document.querySelector('.plus');
// const ses = document.getElementById('reset');
// const opr = document.querySelector('.operations');
// ses.addEventListener("click", ()=>{
//     first.value = 0;
//     second.value = 0;
// })
//     opr.innerHTML = localStorage.getItem('opr') || 0;

//     function updateOperationCount(count) {
//     opr.innerHTML = count;
//     localStorage.setItem('opr', count);
//     }

// function plus(){
//     num1 = parseFloat(first.value);
//     num2 = parseFloat(second.value);
//     const result = num1+ num2 ;
//     dis.innerText= result;
//     opr.innerHTML++;
//     updateOperationCount(parseInt(opr.innerHTML) + 1);
// }
// function plus1(){
//     num1 = parseInt(first.value);
//     num2 = parseInt(second.value);
//     const result = num1 - num2 ;
//     dis.innerText= result;
//     opr.innerHTML++;
//     updateOperationCount(parseInt(opr.innerHTML) + 1);
// }
// function plus2(){
//     num1 = parseFloat(first.value);
//     num2 = parseFloat(second.value);
//     const result = num1 / num2 ;
//     dis.innerText= result;
//     opr.innerHTML++;
//     updateOperationCount(parseInt(opr.innerHTML) + 1);
// }
// function plus3(){
//     num1 = parseFloat(first.value);
//     num2 = parseFloat(second.value);
//     const result = num1 * num2 ;
//     dis.innerText= result;
//     opr.innerHTML++;
//     updateOperationCount(parseInt(opr.innerHTML) + 1);
// }

// caa.addEventListener("click", plus);
// document.querySelector('.minus').addEventListener("click", plus1);
// document.querySelector('.divide').addEventListener("click", plus2);
// document.querySelector('.multiply').addEventListener("click", plus3);
















// JAVASCRIPT FOR SLIDING OF IMAGES EFFECT
// const images = document.querySelectorAll('.image');
// const container = document.querySelector('.image-container');
// const slider = document.getElementById('slide');
// const imageWidth = images[0].clientWidth;
// let currentIndex = 0;

// function slideImages() {
//     // currentIndex = (currentIndex + 1) % images.length;
//     for(i=0; i < images.length; i++) {
//         // currentIndex+=1;
//         if(i>images.entries.length){
//             currentIndex = 0;
//         }
//     }
//     for (let i = 0; i < images.length; i++) {
//         const offset = (i - currentIndex) * imageWidth;
//         images[i].style.top = `${offset}px`;
//     }
// }
// slider.addEventListener("click", slideImages)
// setInterval(slideImages, 1500); // Adjust the time interval (in milliseconds) between slides



// const quotes = document.querySelector('.quote');
// const author = document.querySelector('.person');
// const change = document.querySelector('.nextquote');
// const enterdquote = document.getElementById('quoteInput');
// const enterdname = document.getElementById('nameInput');
// const change2 = document.getElementById('enterdvalues');
// data = [
//     {quote: "“Ask the right questions,and nature will open the doors to her secrets.”", author: "C.V Raman"},
//     {quote: "“Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.”", author: "A.P.J Abdul Kalam"},
//     {quote: "“Work performed with higher knowledge or skill, capacity or ambition, usually brings a correspondingly higher reward.”" , author: "Mokshagundam Visvesvaraya"},
//     {quote: "“Dream isn't What you see while resting something doesnt allow you to rest.”", author: "Nambi Narayanan"},
//     {quote: "“When People throw Stones at You , You turn them into Milestones.”", author: "Sachin Tendulkar"}
// ];


// change.addEventListener("click", ()=>{
// let random = Math.floor(Math.random()*data.length);
// quotes.innerHTML = data[random].quote;
// author.innerHTML = data[random].author;

// })
// change2.addEventListener("click",()=>{
// // enterdquote.value = quotes.innerHTML;
// // quotes.innerHTML = enterdquote.innerText;
// const enteredQuote = enterdquote.value;
//     const enteredAuthor = enterdname.value;
//     if (enteredQuote && enteredAuthor) {
//         quotes.innerHTML = enteredQuote;
//         author.innerHTML = enteredAuthor;
//         data.push({ quote: enteredQuote, author: enteredAuthor });
//         enterdquote.value = '';
//         enterdname.value = '';
//         wall.style.backgroundImage = 'url(./new-background-image.jpg)';
//     } else {
//         alert("Please enter both a quote and an author.");
//     }
//     localStorage.setItem('data', JSON.stringify(data));
// })





// POPUP ANIMATION
// const openbtn = document.getElementById('open-btn');
// const modelcontain = document.querySelector('.modal-container');
// let closebtn = document.getElementById('close-btn');
// openbtn.addEventListener("click", ()=>{
//     modelcontain.style.display = 'block';
// })

// closebtn.addEventListener('click', ()=>{
//     modelcontain.style.display = 'none';
// })

// window.addEventListener('click', (e)=>{
//     if(e.target === modelcontain){
//         modelcontain.style.display = 'none';
//     }
// });



// faq like knowmore
// const accord = document.getElementsByClassName('container');

// for(i=0; i < accord.length ; i++){

//     accord[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//     })

// };


// const startstop = document.querySelector('#startbtn');
// const reset = document.querySelector('#resetbtn');
// // for time
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // set Interval and time status
// let timerinterval = 0;
// let timestatus = 0;


// // for loading zero
// let loadsec = 0;
// let loadmin = 0;
// let loadhrs = 0;

// function stopwtch(){


//     seconds++;

//     if(seconds / 60 === 1){
//         seconds = 0;
//         minutes++;

//         if(minutes/60 ===1){
//             minutes = 0;
//             hours++;
//         }
//     }

//     if(seconds <10){
//         loadsec = "0" + seconds.toString();
//     }else{
//         loadsec = seconds;
//     }
//     if(minutes <10){
//         loadmin = "0" + minutes.toString();
//     }else{
//         loadmin = minutes;
//     }
//     if(hours <10){
//         loadhrs = "0" + hours.toString();
//     }else{
//         loadhrs = hours;
//     }
//     document.getElementById('timer').innerText = loadhrs+ ":" + loadmin+ ":" + loadsec;
// }

// startstop.addEventListener('click',()=>{


//     if(timestatus ==="stopped"){
//         timerinterval = window.setInterval(stopwtch,1000);
//         document.getElementById('startbtn').innerHTML = `<i class="material-symbols-outlined">
//                     pause_circle
//                 </i>`;
//         timestatus = "started";
//     }else{
//         window.clearInterval(timerinterval);
//         document.getElementById('startbtn').innerHTML = `<i class="material-symbols-outlined">
//                     play_circle
//                 </i>`;
//         timestatus = "stopped";
//     }
// });
// reset.addEventListener('click',()=>{
//     window.clearInterval(timerinterval);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     document.getElementById('timer').innerText = "00:00:00";
// })


// const input = document.getElementById('input');
// const submit = document.getElementById('submit');
// const list = document.getElementById('list');
// const done = document.getElementById('contain');
//     const str = document.createElement('div');

// submit.addEventListener('click', ()=>{
//     const hh = input.value;
//     const str = document.createElement('div');
//     list.appendChild(str);
//     str.classList.add('item');
//     str.innerHTML = `<h1>${hh}</h1><nav><i id="done"  class="material-symbols-outlined">done_outline</i><i id="delete" class="material-symbols-outlined">delete</i></nav>`;
//     done.style.backdropFilter = 'none';
//     saveTaskToLocalStorage(hh);
// });

// list.addEventListener("click",(event)=>{
//     const parentDiv = event.target.parentElement.parentElement;
//     parentDiv.remove();
//     const tr = document.createElement('div');
//     list.appendChild(tr);
//     tr.innerHTML = `<h1>Great job! Keep it up!</h1>`
//     tr.style.color = 'white';
//     setTimeout(() => {
//   tr.remove();
// }, 3000);
// })

// function saveTaskToLocalStorage(task) {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }
//   tasks.push(task);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }



// // Load tasks from local storage and display them on page load
// document.addEventListener('DOMContentLoaded', () => {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach((task) => {
//     const str = document.createElement('div');
//     list.appendChild(str);
//     str.classList.add('item');
//     str.innerHTML = `<h1>${task}</h1><nav><i id="done" class="material-symbols-outlined">done_outline</i><i id="delete" class="material-symbols-outlined">delete</i>`;
//   });
// });


  const input = document.getElementById('input');
  const submit = document.getElementById('submit');
  const list = document.getElementById('list');
  const done = document.getElementById('contain');
  const str = document.createElement('div');

  submit.addEventListener('click', () => {
    const hh = input.value;
    const str = document.createElement('div');
    list.appendChild(str);
    str.classList.add('item');
    str.innerHTML = `<h1>${hh}</h1><nav><i id="done" class="material-symbols-outlined">done_outline</i><i id="delete" class="material-symbols-outlined">delete</i></nav>`;
    document.body.style.background = 'url(./4k-batman-michael-keaton-87.jpg) no-repeat center center/cover';
    saveTaskToLocalStorage();
  });

  list.addEventListener('click', (event) => {
    if (event.target.id === 'delete') {
      const parentDiv = event.target.parentElement.parentElement;
      const taskToRemove = parentDiv.querySelector('h1').textContent;
      parentDiv.remove();
      removeFromLocalStorage(taskToRemove);
    }
  });


  list.addEventListener('click', (event) => {
  if (event.target.id === 'done') {
    const parentDiv = event.target.parentElement.parentElement;
    const taskToRemove = parentDiv.querySelector('h1');
    taskToRemove.style.textDecoration = 'line-through';
  }

});




  function saveTaskToLocalStorage() {
    const tasks = Array.from(document.querySelectorAll('.item h1')).map((task) => task.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeFromLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Load tasks from local storage and display them on page load
  document.addEventListener('DOMContentLoaded', () => {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task) => {
      const str = document.createElement('div');
      list.appendChild(str);
      str.classList.add('item');
      str.innerHTML = `<h1>${task}</h1><nav><i id="done" class="material-symbols-outlined">done_outline</i><i id="delete" class="material-symbols-outlined">delete</i>`;
    });
    
  });
