


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
					"Hi, my name is Lan. I'm from Vietnam which is a pretty nice and friendly country. I am passionate about designs, movies, music and recently codes. I want to be a Front-End Developer after I finish school at Fanshawe College. Check out my Instagram for more information.",
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ullam in vitae modi quas neque beatae mollitia ab, illo sit, pariatur explicabo aut odio repellendus aperiam et, alias quod inventore."
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
	bio.style.backgroundColor = "rgba(189, 8, 165, 0.8)"
	title[index].style.color = "rgba(189, 8, 165, 0.8)"
	title[0].style.color = "white"
	}

	// create close function
	let	close		= document.querySelector(".close")
	close.addEventListener("click",function(){ 
		bio.style.opacity = "0"
	})

		
}))



