let api_key="DoGsH8Zo1K2DmWUEPFYiXQIDXCUZC8Wy";
let count=10;
let api_url=`https://api.giphy.com/v1/gifs/search?api_key=DoGsH8Zo1K2DmWUEPFYiXQIDXCUZC8Wy&q=Animal&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

let searchBtn=document.getElementById('search-btn');
let searchGif=document.getElementById('search-gif');
let GIFS=document.getElementById('gifs');

let generateGIF=()=>
{
    let q=searchGif.value;
    if(q==='')
    {
        q='good morning';
    }
    // GIFS.innerHTML=`${q} got searched`;
    let gif_Count=count;
    let final_Url=`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${gif_Count}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;



    fetch(final_Url)
    .then(res=>res.json())
    .then(info=>{

        let gifsData=info.data;
        GIFS.innerHTML='';

        gifsData.forEach((gif)=>{
            let container=document.createElement("div");
            let iframe=document.createElement("img");
            iframe.setAttribute('src',gif.images.original.url);
            iframe.style.height='200px';
            iframe.style.width='300px'
            iframe.onload=()=>{
                gif_Count--;
                if(gif_Count===0)
                {
                    console.log(`all done ${q}`);
                }
            };
            container.append(iframe);
            GIFS.append(container);
        })
    })
};

searchBtn.addEventListener("click",generateGIF);
window.addEventListener("load",generateGIF);



// const arr=[];
// const obj={};