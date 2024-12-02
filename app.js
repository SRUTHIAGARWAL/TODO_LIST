let btn=document.querySelector('.btn');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');
let lis=document.querySelectorAll('li');
btn.addEventListener("click",(event)=>{
    let item=document.createElement('li');
    item.innerText=inp.value;
    let newbtn=document.createElement('button');
    newbtn.classList.add('del');
    newbtn.innerText="DELETE";
    item.appendChild(newbtn);
    ul.appendChild(item);
    inp.value="";
});
// let newbtns=document.querySelectorAll('.del');
//     for(newbtn of newbtns){
//     newbtn.addEventListener("click",()=>{
//         let par=newbtn.parentElement;
//         par.remove();
//     });}
ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
})    