let odometers = document.getElementsByClassName('odometer')
let interval = 3000

console.log(odometers)

Array.from(odometers).forEach((element) => {


  let startValue = 0
  let endValue = parseInt(element.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue)
  console.log("--->", duration)
  let counter = setInterval(function () {
    startValue += 1;
    element.textContent = startValue;
    console.log("--->", startValue)
    if (startValue == endValue) {
      clearInterval(counter)
    }
  }, duration)
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("-->", entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const testimonalCards = document.getElementsByClassName('testimonialCard')

Array.from(testimonalCards).forEach((element)=>{observer.observe(element)})