let nextBtns = document.querySelectorAll('.btn-next')
let prevBtns = document.querySelectorAll('.btn-prev')
let formSteps = document.querySelectorAll('.form-step')
let progressBars = document.querySelectorAll('.progress-step')
let formStepNum = 0;
// next btn 
nextBtns.forEach(nxbtn => {
        nxbtn.addEventListener('click',(btn)=>{
            formStepNum++;
            validationForm();
            updateForm();
            updateProgressbar();

            
        })
});
// previous btn
    prevBtns.forEach(prevBtn => {
            prevBtn.addEventListener('click', (btn)=>{
                formStepNum--;
                updateForm();
            updateProgressbar();
            })
    });
// updating form UI 
const updateForm = () =>{
    formSteps.forEach(formStep => {
        if(formStep.classList.contains('form-step-active')){
            formStep.classList.remove('form-step-active')
        } 
    });
    formSteps[formStepNum].classList.add('form-step-active') 
}

//  Updating Progrees bar
const updateProgressbar = () =>{
    progressBars.forEach((progressBar,id) => {
         if(id<formStepNum+1){
             progressBar.classList.add('progress-step-active')
         }
         else{
             progressBar.classList.remove('progress-step-active')
         }
    });
}

const validationForm = () => {
    let userName = document.querySelector('#username').value;
    let position = document.querySelector('#position').value;
    if(userName && position == ""){
        alert("Can not blank")
    }
}