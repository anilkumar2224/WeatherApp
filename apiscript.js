const key='LNIREE5uYAPM1pEktL8aFJ24t2MStcR8';



const getWeather=async (citycode)=>{
    const baseurl='https://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${citycode}?apikey=${key}`;


    const response=await fetch(baseurl+query);
    const data=await response.json();
    return data[0];
};
const getCityCode=async (city)=>{
    const baseurl='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;


    
    const response=await fetch(baseurl+query);
    const data=await response.json();
    
return data[0];

};


