


console.log("aaa")

let lan 	= document.querySelector('.lan')
	lanSide = document.querySelector(".lanSide")
	yuliia 	= document.querySelector('.yuliia')
	yuliiaSide = document.querySelector(".yuliiaSide")


lan.addEventListener("mouseover", ()=>
{
	yuliiaSide.style.opacity = "1"
})

lan.addEventListener("mouseout", ()=>
{
	yuliiaSide.style.opacity = "0"
})

yuliia.addEventListener("mouseover", ()=>
{
	lanSide.style.opacity = "1"
})

yuliia.addEventListener("mouseout", ()=>
{
	lanSide.style.opacity = "0"
})