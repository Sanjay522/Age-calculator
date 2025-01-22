

  const month1 = document.querySelector(".month")
const warning = document.querySelector(".warning")

month1.addEventListener('input', () => {
    const maxLength = 2;
    if (month1.value.length > maxLength) {
      month1.value = month1.value.slice(0, maxLength);
    }
  });

month1.addEventListener("input",()=>{
    if (month1.value.length > 2 ||month1.value > 12 ||month1.value == 0) {
        warning.textContent = "Please enter DOB month between 1 to 12"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})


//   ************** Day 1 input****************
const day1= document.querySelector(".day1")

day1.addEventListener('input', () => {
    const maxLength = 2;
    if (day1.value.length > maxLength) {
      day1.value = day1.value.slice(0, maxLength);
    }
  });
day1.addEventListener("input",()=>{
    if (day1.value.length > 2 ||day1.value > 31 ||day1.value == 0) {
        warning.textContent = "Please enter DOB Day between 1 to 31"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})



//   ******************Year 1*********************
const year1 = document.querySelector(".year1")

year1.addEventListener('input', () => {
    const maxLength = 4;
    if (year1.value.length > maxLength) {
      year1.value = year1.value.slice(0, maxLength);
    }
  });

year1.addEventListener("input",()=>{
    if (year1.value.length > 4 ||year1.value == 0) {
        warning.textContent = "Please enter the year"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})
//*****************Month2************************

const date = new Date()
 month = date.getMonth()


month2 = document.querySelector(".month2")
month2.addEventListener('input', () => {
    const maxLength = 2;
    if (month2.value.length > maxLength) {
      month2.value = month2.value.slice(0, maxLength);
    }
  });

month2.addEventListener("input",()=>{
    if (month2.value.length > 2 ||month2.value > 12 ||month2.value == 0) {
        warning.textContent = "Please enter current month between 1 to 12"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})
// ***************************Day 2**************************
const day2= document.querySelector(".day2")

day2.addEventListener('input', () => {
    const maxLength = 2;
    if (day2.value.length > maxLength) {
      day2.value = day2.value.slice(0, maxLength);
    }
  });
day2.addEventListener("input",()=>{
    if (day2.value.length > 2 ||day2.value > 31 ||day2.value == 0) {
        warning.textContent = "Please enter current Day between 1 to 31"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})
// ******************Year 2************************
const year2 = document.querySelector(".year2")

year2.addEventListener('input', () => {
    const maxLength = 4;
    if (year2.value.length > maxLength) {
      year2.value = year2.value.slice(0, maxLength);
    }
  });

year2.addEventListener("input",()=>{
    if (year2.value.length > 4 ||year2.value == 0) {
        warning.textContent = "Please enter the year"
        warning.style.color = "red"
    }
    else{
        warning.textContent = ""
    }
})
// ************* Calculate button******************


// ********* Clear button**************
const clear = document.querySelector(".clearButton")
const allVar = document.querySelectorAll(".month,.day1")
    clear.addEventListener("click",()=>{
        month1.value = '';
        month2.value = '';
        day1.value = '';
        day2.value = '';
        year1.value = '';
        year2.value = '';
        textArea.value = '';
    })
    // clear.values = "12"
 
    const yourAge = document.querySelector(".submit")
    const textArea = document.querySelector(".answer")

    // const age = `your age is ${yearValue}${monthValue}${dayValue}`
    yourAge.addEventListener("submit", function(event) {
        event.preventDefault()})
        const monthValue = month1.value - month.value; 
    const dayValue = day2.value - day1.value;
    const yearValue = year2.value - year1.value; 
    textArea.textContent = `your age is ${yearValue} year ${monthValue}months${dayValue}days`
    
    // yourAge.addEventListener("submit",()=>{
    //     textArea.textContent = `your age is ${yearValue}${monthValue}${dayValue}`
    // })