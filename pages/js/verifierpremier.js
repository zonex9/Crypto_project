function verifierpremier(){
{
	var n = document.getElementById("numero").value;
 
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return  alert("Desolé, Ce n'est pas un nombre premier");
      }
    }
    return alert("Parfait,Ce n'est pas un nombre premier");  
  }
}




