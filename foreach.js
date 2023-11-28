var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
  
    var res=result.forEach(element => {
        var countrynames=element.name.common;
        var countrycapital=element.capitalInfo.latlng;
        var flag=element.flags.alt;
        var dummycapital=element.capital;
        console.log("The names of the country:"+countrynames);
        console.log("the capital of the country:"+dummycapital);
        console.log("the capital info of the country:"+countrycapital);
        console.log("the flag of the countries:"+flag);
        
    });
}