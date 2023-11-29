var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var result=JSON.parse(request.response);
   var res=result.filter((ele)=>ele.currencies);
   var cur=res.map((elem)=>elem.currencies);
   var dollar=cur.filter((element)=>element.USD);
   console.log(dollar);
   
   console.log(res);
}


