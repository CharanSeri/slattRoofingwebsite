const yearsExperience = 20;
const numberOfProjects = 200;
const numberOfEmployees = 25;

const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
  
    let hasRun = false;
  
    const options = {
      threshold: [0, 0.9],
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };

let yearsOfExperienceOdometerValue = document.getElementById("experienceOdometer");
let numberOfProjectsOdometerValue = document.getElementById("projetcsOdometer");
let numberOfEmployeesOdometerValue = document.getElementById("employeesOdometer");

createOdometer(yearsOfExperienceOdometerValue,2900)
createOdometer(numberOfProjectsOdometerValue,2100)
createOdometer(numberOfEmployeesOdometerValue,1100)


// function setCount(element,countValue) {

//     element.innerHTML = countValue

// }

// async function counterForOdometer(element, maxCount){
// let initialCount = 0
//     for(i=1;i<= maxCount;i++)
//     {
//      initialCount+=1
//      setTimeout(setCount(element, initialCount),100000)
//   }
// }

// console.log(typeof yearsOfExperienceOdometerValue.innerHTML)
// console.log(numberOfEmployeesOdometerValue.innerHTML)
// console.log(numberOfProjectsOdometerValue.innerHTML)

