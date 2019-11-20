function verifierpremiers()
{
	var nombre = document.getElementById("numero").value;
 
  if (nombre===1)
  {
    return false;
  }
  else if(nombre === 2)
  {
    return true;
  }else
  {
	  var i=2;
    while(i < nombre)
    {
      if(nombre % i === 0)
      {
        return  alert("Desolé, Ce n'est pas un nombre premier");
      }
	  i=i+1;
    }
    return alert("Parfait,C'est un nombre premier");  
  }
}




