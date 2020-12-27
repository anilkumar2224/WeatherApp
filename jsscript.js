const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');

const updateUI=(data)=>{
    const {cityInfo,weather}=data;
    details.innerHTML=`
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div  class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span style="color: orange;">${weather.Temperature.Metric.Value}</span>
        <span style="color: orange;">&deg;C</span>
        </div>
    `; 
    card.classList.remove('resize');
    time.classList.remove('size');
    icon.classList.remove('hide'); 
    let timeSrc=null;
    const iconSrc=`icons/${weather.WeatherIcon}.svg`;
    if(weather.IsDayTime){
        timeSrc='day.svg';
    }
    else{
        timeSrc='night.svg';
    }
    time.setAttribute('src',timeSrc);
    icon.setAttribute('src',iconSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity=async (city)=>{

   const cityInfo=await getCityCode(city);
   const weather= await getWeather(cityInfo.Key);

   return { cityInfo,weather};

}
cityForm.addEventListener('submit',e=>{
    e.preventDefault();
    const city=cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    .then(data=>{
       updateUI(data);
       document.getElementById('card').scrollIntoView();
    })
    .catch(err=>{
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
        card.classList.add('resize');
       time.classList.add('size');
        time.setAttribute('src','notfound.png');
        icon.classList.add('hide');
     details.innerHTML='';
        document.getElementById('card').scrollIntoView();
     console.log(err);
    })

   
});
localStorage.setItem('city','anil');
if(localStorage.getItem('city')=='anil'){
    updateCity(localStorage.getItem('city'))
    .then(data=>{
        updateUI(data);
     })
     
    }

    function draw() {
        var ctx =document.getElementById('canvas1').getContext('2d');
        if (canvas1.getContext) {
        
        
        ctx.beginPath();
        
        ctx.moveTo(75, 50);
        ctx.lineTo(25, 75);
        ctx.lineTo(75,100);
        ctx.lineTo(42,75);
       
        ctx.fill();
        
        
        ctx.beginPath();
        ctx.moveTo(85, 50);
        ctx.lineTo(135, 75);
        ctx.lineTo(85,100);
        ctx.lineTo(118,75);
        ctx.closePath();
        ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * 0) + ', ' + 
                        Math.floor(255 - 42.5 * 0) + ')';
        ctx.stroke();
        
        
        }
        }
        draw();
        
