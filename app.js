
// container1       --main
// storyDpBox       --rectangle box
// storyDp          ---round stories

let storyDp = document.querySelectorAll(".storyDp");
let storyDpBox = document.querySelector(".storyDpBox");
let fullScreenStory = document.querySelector(".fullScreenStory");
let fullScreenStoryImg = document.querySelector(".fullScreenStory Img");




// Image storing in Array inside object 
let dps =[
    {
        dp:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"Images/IMG_2410.jpg", 
        story:"Images/IMG_2410.jpg"
    },
    {
        dp:"https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1529672425113-d3035c7f4837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1515138692129-197a2c608cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1519282407670-6e0ace7ffc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1562383780-8486ec2b261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" 
    },
    {
        dp:"https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1627281796892-39e266ee50be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        story:"https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
]

// Making DP icon 

var divImage = " ";
dps.forEach(function(elem,index){
    divImage += `<div class="storyDp" id="${index}" onclick="handleClick(this)">
<img src="${elem.dp}" alt="">
</div>`
})

// Appending DP images automatically according to dp In Array. It means if there is 4 dp in array then 4 dp will be shown on page if 3 then 3 respectively
storyDpBox.innerHTML=divImage;



// Click on DP 
let divImage2= " ";
function handleClick(clickedDiv) {
    var divId = clickedDiv.id;  //Gets id of clicked story

divImage2= (dps[divId].dp);
    fullScreenStory.style.display="flex";
    fullScreenStory.innerHTML= `</div><img src="${dps[divId].story}" alt=""></img>`
storyDpBox.style.opacity=0;// display None storyIcons when click on story icon and show image

setTimeout(() => {
    fullScreenStory.style.display="none";
/*!!!!!!!!!This code does is: The problem was when fullStory was being seen 
then the opacity of storyDpBox was being 0 and even after disappearing of FullStory
 the storyDpbox was not being appear so this line does is when fullStory Disappears then
  storyDpBox appears--------*/
    if (window.getComputedStyle(fullScreenStory).display === "none") {
        storyDpBox.style.opacity=1;
    } else {
        storyDpBox.style.opacity=0;
    }
    // !!!!!!!!!
}, 3000);

}

fullScreenStory.addEventListener("click", function(){
    storyDpBox.style.opacity=1;// display story Icons when click on Images
    fullScreenStory.style.display="none";

})
