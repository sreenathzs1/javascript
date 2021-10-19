function button()
{ 
	var contact=document.getElementById("sree").value

	var	phone=contact.length

    if(phone>9)
    
	{
	     document.getElementById("contact").removeAttribute("disabled")
	}
	else
	{
		document.getElementById("contact").setAttribute("disabled","true")
	}
    

}