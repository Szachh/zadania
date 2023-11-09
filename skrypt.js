function zamiana(liczba){
  if(liczba==0){
    var lista=[0];
  }
  else{
    var lista=[];
    while(liczba>0){
      lista.push(liczba%2);
      liczba=(liczba/2)>>0;
    }
  }
  return lista.reverse().join("");
}
function program(){
  var liczba10=document.getElementById("liczba").value;
  var liczba2=zamiana(liczba10);
  document.querySelector("span").innerHTML=liczba2;
}
