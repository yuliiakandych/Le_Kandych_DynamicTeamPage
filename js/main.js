


console.log("aaa")

let lan 	= document.querySelector('.lan')
	lanSide = document.querySelector(".lanSide")
	yuliia 	= document.querySelector('.yuliia')
	yuliiaSide = document.querySelector(".yuliiaSide")
	bioL		= document.querySelector(".bioL")
	bioY		= document.querySelector(".bioY")


$(".promoText").hide().fadeIn(2000)
$(".front").hide().delay(100).fadeIn(1000)
$(".yuliia").hide().delay(300).fadeIn(1000)

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
		if(bioY.style.display === "block")
		{
			$(".bioY").fadeOut()
		}
		else
		{
			$(".bioL").hide()
			$(".bioY").fadeIn()
		}
		
	})

lan.addEventListener("click",()=>
	{
		if(bioL.style.display === "block")
		{
			$(".bioL").fadeOut()
		}
		else
		{
			$(".bioY").hide()
			$(".bioL").fadeIn()
		}
		
	})



