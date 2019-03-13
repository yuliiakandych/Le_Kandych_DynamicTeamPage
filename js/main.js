


console.log("aaa")

let lan 	= document.querySelector('.lan')
	lanSide = document.querySelector(".lanSide")
	yuliia 	= document.querySelector('.yuliia')
	yuliiaSide = document.querySelector(".yuliiaSide")
	bioL		= document.querySelector(".bioL")
	bioY		= document.querySelector(".bioY")



lan.addEventListener("mouseover", ()=>
{
	yuliiaSide.style.display = "block"
	

	lan.addEventListener("mouseout", ()=>
	{
	yuliiaSide.style.display = "none"
	})
})


yuliia.addEventListener("mouseover", ()=>
{
	lanSide.style.display = "block"
	
	yuliia.addEventListener("mouseout", ()=>
	{
	lanSide.style.display = "none"
	})


})




yuliia.addEventListener("click",()=>
	{
		if(bioY.style.opacity === "1")
		{
			bioY.style.opacity = "0"
		}
		else
		{
			bioL.style.opacity = "0"
			bioY.style.opacity = "1"
		}
		
	})

lan.addEventListener("click",()=>
	{
		if(bioL.style.opacity === "1")
		{
			bioL.style.opacity = "0"
		}
		else
		{
			bioY.style.opacity = "0"
			bioL.style.opacity = "1"
		}
		
	})



