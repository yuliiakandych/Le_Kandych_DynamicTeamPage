
(()=>{

console.log("aaa")

// set variables
let lan 		= document.querySelector('.lan')
	lanSide 	= document.querySelector(".lanSide")
	yuliia 		= document.querySelector('.yuliia')
	yuliiaSide 	= document.querySelector(".yuliiaSide")
	bio 		= document.querySelector(".bio")
	title		= document.querySelectorAll(".name")
	front		= document.querySelectorAll(".front")

	bioArray 	= [
					"Hi, my name is Lan. I'm from Vietnam which is a pretty nice and friendly country. I am passionate about designs, movies, music and recently codes. I want to be a Front-End Developer after I finish school at Fanshawe College. Check out my Instagram for more cool stuffs.",
					"My name is Yuliia Kandych. I was born in Ukraine in the small city near the biggest and the most beautiful river in our country. I am currently studying Interactive Media Design at Fanshawe College and it is the greatest experience in my life. Also, I like watercolor painting and rollerblading."
					]

// hover effect for Lan
lan.addEventListener("mouseover", ()=>
{
	yuliiaSide.style.display = "block"
	

	lan.addEventListener("mouseout", ()=>
	{
	yuliiaSide.style.display = "none"
	})
})

// hover effect for Yuliia
yuliia.addEventListener("mouseover", ()=>
{
	lanSide.style.display = "block"
	
	yuliia.addEventListener("mouseout", ()=>
	{
	lanSide.style.display = "none"
	})


})

// set the function when click on each image
front.forEach((e,index) => e.addEventListener("click",function()
{

	// call out the bio in array
	bio.style.opacity = "1"
	bio.innerHTML = "<p>" + bioArray[index] + "</p>" + "<span class='close'>&times;</span>";


	// set color for Lan
	if(index == 0)
	{
	bio.style.backgroundColor = "rgba(204, 18, 40, 0.8)"
	title[1].style.color = "white"
	title[index].style.color = "rgba(204, 18, 40, 0.8)"
	}



	// set color for Yuliia
	if(index == 1)
	{
	bio.style.backgroundColor = "rgba(18, 180, 205, 0.8)"
	title[index].style.color = "rgba(18, 180, 205, 0.8)"
	title[0].style.color = "white"
	}

	// create close function
	let	close		= document.querySelector(".close")
	close.addEventListener("click",function(){ 
		bio.style.opacity = "0"
		title[index].style.color = "white"
	})

		
}))

})()

