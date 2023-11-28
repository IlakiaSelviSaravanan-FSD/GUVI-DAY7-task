var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var result=JSON.parse(request.response);
   var res=result.map((ele)=>ele.currencies);
   
   console.log(res);
}


