// Chart Setup
let lineChart;

//Get canvas element from the DOM
const ctx = document.getElementById("lineChart").getContext("2d");

// Create a function that adds
// the chart with a color as the function argument
function chartSetup(accentColor){
    //Creating chart using Chart Js
    lineChart = new Chart(ctx, {
        type:"line",
        data: {
            labels: [
                '11:00am','12:00am','1:00pm','2:00pm','3:00pm'
            ],
            datasets:[{
                label:"Views",
                data:[0, 2500,1500,2000,500,1800,2500,3000],
                backgroundColor:accentColor,
                borderColor:accentColor,
              },
            ],

        },
        options: {
            maintainAspectRation:false,
        }
    })
}

//Run chart function with default accent color
chartSetup('#654ce5');


//Dark Mode Setup
const darkToggleIcon = document.querySelector('#darkToggle');
const panels = document.querySelectorAll('.panel');

darkToggleIcon.addEventListener('click', (e)=>{
    //Toggle Icon
    e.target.classList.toggle('fa-sun');
    //Toggle Dark Mode
    document.body.classList.toggle('dark-mode');
})

//Accent Color Change
const r = document.querySelector(':root');
const colors = document.querySelectorAll('.colors li');

colors.forEach(color =>{
    color.addEventListener('click', ()=>{
        //Get the clicked element background property value from the css
        const element = window.getComputedStyle(color);
        let bg = element.getPropertyValue("background-color");

        //Reset the acent CSS variable to the new color
        r.style.setProperty('--accent', bg);

        //Destroy Previous Chart
        lineChart.destroy();
        //Create new chart with a new accent color
        chartSetup(bg);
    })
})