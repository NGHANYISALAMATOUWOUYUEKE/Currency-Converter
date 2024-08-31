let select = document.querySelectorAll('#Currency');
let btn = document.getElementById('btn');
let num = document.getElementById('num');
let ans = document.getElementById('ans');
let histBtn = document.getElementById('hist_btn');
let currencyNum = document.getElementById('CurrencyA');
let currencyAns = document.getElementById('CurrencyB');

fetch('https://api.frankfurter.app/currencies')
.then((data) => data.json())
.then((data) =>{
    display(data);
});

function display(data){
    const entries = Object.entries(data);
    console.log(entries.length);
    for(var i = 0;i < entries.length; i++){ 
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}
btn.addEventListener("click", async() =>{
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value =num.value;
    if(currency1 != currency2){
        convert(currency1,currency2, value).then((res)=>{
            console.log("res: ", res)
           saveHist(num.value, res);
       })
    }
    else{
        alert("choose different Currency1");
    }
});

// this code makes the answer to disply without the loading effect 
// async function convert(currency1, currency2, value){
//     const host = 'api.frankfurter.app';
//     ans.textContent = 'Please wait.................'

//     let valu = 0
//     await fetch(`http://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
//     .then((val) => val.json())
//     .then((val) =>{
//         console.log(Object.values(val.rates)[0]);
//         ans.value = Object.values(val.rates)[0];
//         valu = Object.values(val.rates)[0];
//     })

//     return valu;
// }

async function convert(currency1, currency2, value) {
    const host = 'api.frankfurter.app';
    ans.value = 'please wait...';
    let valu = 0

    try{
        const response = await fetch(`http://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const val = await response.json();
        const rate = Object.values(val.rates)[0];
        console.log(rate);
        ans.value = `${rate}`;
        valu = rate;
    }
    catch(error){
        console.error('Fetch error' , error);
        ans.textContent ='Something went wrong. Please try again';
    }

    return valu;
    
}

function historyShow(event){

    const histView = document.getElementById('hist_view');
    const childHist = document.createElement('div');
    childHist.className = 'child_hist';
   childHist.innerHTML = '<h2> ExchangeRate History</h2>';
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    
    
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) ||[]
    savedTasks.forEach(taskObj => {
        let listItem = document.createElement('li');
        listItem.textContent = `${taskObj.num}${currency1} = ${taskObj.ans}${currency2}
        `;
        childHist.appendChild(listItem);
        histView.appendChild(childHist);
    });
    const cancel = document.createElement('button');
    cancel.setAttribute('onclick' , 'cancelHist()');
    cancel.className = 'cancel';
    cancel.innerHTML = 'cancel';
    childHist.appendChild(cancel);
    cancel.addEventListener("click" ,cancelHist =>{
        childHist.remove();
    })
    const body = document.getElementsByName('body');
    // body.addEventListener("click", cancelHist);
    window.addEventListener("click", cancelHist);
}

// function cancelHist (){
//     console.log("cancellin")
//     const histView = document.getElementById('hist_view');
//     histView.remove();
// }

// const cancel = document.querySelector('.cancel');
// cancel.addEventListener("click" ,cancelHist =>{

function saveHist(num, ans){
    console.log(num, ans)
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    if(currency1 != currency2){
        let savedTasks = JSON.parse(localStorage.getItem('tasks')) ||[];
    
        const taskObj = {num:num, currency1:currency1, dash:'=', ans:ans, currency2:currency2};
        savedTasks.push(taskObj)
    
        localStorage.setItem('tasks',JSON.stringify(savedTasks));
    }
}
function cancelHist (){
}

