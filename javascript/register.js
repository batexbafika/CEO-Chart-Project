

    /* Slider control commands*/

    let slides=document.querySelectorAll('.slide');
    let currentSlide=0;
    
    function  slideshow(){
      slides.forEach((slide)=>{
      slide.classList.remove('active');});
      
          slides[currentSlide].classList.add('active');
        currentSlide=(currentSlide+1)% slides.length;
      }
      
      slideshow();
      
      setInterval(slideshow,5000);


    /* Form validation section*/
  
function verify(){
 

  const name1=document.getElementById('name1').value;
  const name2=document.getElementById('name2').value;  
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  
  if (!validateName(name1)){
      alert('Second Name takes only alphabets/can not be empty');
  } 

  
  if (!validateName(name2)){
    alert('First Name takes only alphabets/can not be empty');
} 
  
  else if (!validateEmail(email)){
      alert('miss match Email must contain @...com/can not be empty');
  }
    
  else if(!validatePassword(password)){
      alert('password example abcDEF123./@ ');
    }
  
  else{
   
    window.location.href='landing.html';
  
  }
  
  
  function validateName(name1){
  
      const namePattern=/^[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/;
      return name1.match(namePattern);
  }

  function validateName(name2){
  
    const namePattern=/^[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/;
    return name2.match(namePattern);
}
  
  function validateEmail(email){
  
      const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email.match(emailPattern);
  }
  
  
  function validatePassword(password){
  
      const passPattern=/(?=.*\d)(?=.*[a-z])(?=.*\s)/;
      return password.match(passPattern);
  }}
  

 /* end of form*/

function transitionformPage(){

const body=document.querySelector('body');

body.classList.add('fade-in');

setTimeout(()=>{
window.location.href='form.html';},
100)

}

function LandingPage(){
  window.location.href='landing.html';
}


/*To validate user name and Next item if true*/




function checklen(){
  let i= 4;
    const len=document.getElementById('nam').value;
    if(len.length>=i){
      return true;
    }
    else{
      alert('UserName is too short (4-15)');
    }
}


const link1=document.getElementById('Link1').addEventListener('click', function(){

  const namm=document.getElementById('nam').value;
     
  
      if(!namm.includes('@')){
        alert('@ is missing! in your user name');
      }

      else if(!atChecker(namm)){
        alert('username must start with @');
      }
      else if(!checklen()){
        return true;
      }
      else if(namm.includes(',') || namm.includes('?') || namm.includes('}') 
      || namm.includes('{')|| namm.includes('-')|| namm.includes('~')
    ||namm.includes('`')||namm.includes('!')||namm.includes('#')||namm.includes('%')
    ||namm.includes('^')||namm.includes('$')||namm.includes('&') || namm.includes('+')
    ||namm.includes(')')||namm.includes('(')||namm.includes('/')||namm.includes('*')
    ||namm.includes('.')||namm.includes(';')||namm.includes(':')||namm.includes('"')
    ||namm.includes('>')||namm.includes('<')||namm.includes('=')||namm.includes('1')
    ||namm.includes('2')||namm.includes('3')||namm.includes('6')||namm.includes('7')||namm.includes('8')
    ||namm.includes('4')||namm.includes('5')||namm.includes('9')||namm.includes(' ')){
        alert('Enter only letters after >> @ / NO space/numbers');
      }

      else{
        showHabitForm2();
      }
});


const formU=document.getElementById('profile');
const formh=document.getElementById('hab');
const namm=document.getElementById('nam').value;

function showHabitForm2(){
    formU.style.display="none";
    formh.style.display="block";
}

/*To validate the back button*/

const backto =document.getElementById('backlink').addEventListener('click', function(){

  showHabitForm1();
});

function showHabitForm1(){
      formU.style.display='block';
      formh.style.display='none'; 
      formh.reset();
}

/*checking if username starts with '@' */
function atChecker(namm){
    if(namm.charAt(0)==='@'){
      return true;
    }
   
  }

  /*loading my setup page*/

  function loadLsetup(){

    window.location.href='setup.html';
  }

  function HomePage(){
    window.location.href='HomePage.html';
  }
   
  
function displayDivMenu(){
  const table1=document.getElementById('mennu');
  let notti=document.getElementById('notify3');
  let a=6,b=4;

  if (a>b) {
    table1.style.display = 'block';
    table1.style.width = '16em';
    notti.classList.add('bgg');
    deleteTree();
    dropOffNoti();
    wlcomeDel();
  } 
  else {
    console.error(' the table1 element does not exist');
   }
}
  
function hidDivMenu(){
  const table2=document.getElementById('mennu');
  let notti2=document.getElementById('notify3');
  let a=6,b=4;

  if (a>b) {
    table2.style.display = 'none';
    notti2.classList.remove('bgg');
    
  } 
   else {
    console.error(' the table2 element does not exist');
   }
}

function dropDownNoti(){
  let allbell=document.querySelectorAll('#bell p');
  let Defaut=document.getElementById('Defaut');
  let Bellicon=document.getElementById('bell');
  let notify1=document.getElementById('notify1');
 let co=4;
  if(allbell.length<co){
  
    Bellicon.style.display='block';
    Bellicon.style.height='18em';
     notify1.classList.add('bgg');
    Defaut.style.display="block";
    hidDivMenu();
    deleteTree();
    wlcomeDel();
  }
    else{
      // Defaut.style.display="block";
      Bellicon.style.display='block';
      notify1.classList.add('bgg');
      Defaut.style.display="none";
      Bellicon.style.height='18em';

    }
  
}

function dropOffNoti(){
  let notify1=document.getElementById('notify1'); 
  let Bellicon2=document.getElementById('bell');
  
      Bellicon2.style.display='none';
      notify1.classList.remove('bgg');
     
}

function shwTreee(){
    const forTree=document.querySelectorAll('#forTree p');
    const forT=document.getElementById('forTree');
    const ppop=document.getElementById('ppop'); 
    const notif2=document.getElementById('notify2');
 
    if(forTree.length<2){
      forT.style.display='block';
      forT.style.height='14em';
      forT.style.width='14em';
      ppop.style.display='block';
      notif2.classList.add('bgg');
      hidDivMenu();
      dropOffNoti();
      wlcomeDel();
    } else{
      forT.style.display='block';
      forT.style.height='14em';
      forT.style.width='14em';
      ppop.style.display='none';
    }
}
function deleteTree(){
  const notifl=document.getElementById('notify2');
  let s=5,y=7;
  if(y>s){

    const notiff=document.getElementById('forTree');
    notiff.style.display='none';
    notifl.classList.remove('bgg');
    
  }
}

/* clear welcome notification*/

function wlcomeDel(){

  const clearWel=document.getElementById('welcome');
  clearWel.style.opacity="0.3";
  clearWel.style.display="none";
}

function hovbut() {
  const tol1Elements = document.querySelectorAll('#tol1'); // Select elements with class "t1"

  for (const tol1 of tol1Elements) {
    const computedStyle = getComputedStyle(tol1);

    if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
      tol1.style.display = 'block';
      hidDivMenu();
      dropOffNoti();
      wlcomeDel();
      deleteTree();
    }
    else  if (computedStyle.display === 'block' || computedStyle.visibility === 'block') {
      tol1.style.display = 'none';
      hidDivMenu();
      dropOffNoti();
      wlcomeDel();
      deleteTree();
     
  }
}

}