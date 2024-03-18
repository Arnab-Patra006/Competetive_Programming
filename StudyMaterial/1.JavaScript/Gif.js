const fetch = require('node-fetch');
const my_api_url='https://api.giphy.com/v1/gifs/search?api_key=DoGsH8Zo1K2DmWUEPFYiXQIDXCUZC8Wy&q=Animal&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
const my_api_key='DoGsH8Zo1K2DmWUEPFYiXQIDXCUZC8Wy';

const searchItem=document.getElementById('searchitem');
const searchBtn=document.getElementById('searchbtn');
let myapidata='';


async function fetchData()
{
    try{
        const response=await fetch(my_api_url);
        const data=await response.json();
        myapidata=data;
    }
    catch(err)
    {
        console.error('Unable to fetch data '+err);
    }
}

searchItem.addEventListener("keydown",(event)=>
{
    console.log(event.target.value);
})

searchBtn.addEventListener('click',async()=>{
    await fetchData();
    showgifs();
});

function showgifs()
{
    document.getElementById('gifs').innerHTML=`My data ${JSON.stringify(myapidata)}`;
}
