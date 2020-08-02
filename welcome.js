  var A=25.0961;
  var B=85.3131;


var mymap = L.map('mapid').setView([A,B],5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F2aXNoMTIzNDUiLCJhIjoiY2s1dXdpYzE5MHh3eTNucnppaWdzcnN6diJ9.P_dWAsA1odFQMz8M3uTmNA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2F2aXNoMTIzNDUiLCJhIjoiY2s1dXdpYzE5MHh3eTNucnppaWdzcnN6diJ9.P_dWAsA1odFQMz8M3uTmNA'
}).addTo(mymap);

  var i=new XMLHttpRequest();
  var e = document.getElementById("district");
  var str = e.options[e.selectedIndex].value;
      
      i.onreadystatechange=function()
      {
        
        if(i.readyState==4 )
        {
          myObj = JSON.parse(this.responseText); 
      
               A=myObj.features[0].geometry.coordinates[0];
               B=myObj.features[0].geometry.coordinates[1];
               console.log(A);
               console.log(B);


                var marker = L.marker([B, A]).addTo(mymap);

                marker.bindPopup("My Location").openPopup();
               // mymap = L.map('mapid').setView([A,B], 13);
        }  
        
      };
      
      i.open("GET","http://api.mapbox.com/geocoding/v5/mapbox.places/"+str+".json?access_token=pk.eyJ1Ijoia2F2aXNoMTIzNDUiLCJhIjoiY2s1dXdpYzE5MHh3eTNucnppaWdzcnN6diJ9.P_dWAsA1odFQMz8M3uTmNA" ,true);
      i.send();

// var api = "webapi/domain";
// $.get(api, function (domain, status) {
//     if (status == "success") {
//         var domainOptions = "";
//         for (var i = 0; i < domain.length; i++) {
//             domainOptions += '<option value="' + domain[i].id + '">' + domain[i].discipline + ' ' + domain[i].branch + '</option>';
//         }
//         $("#domainId").append(domainOptions);
//     }
// });

  var j=new XMLHttpRequest();
   var yield=2.3;
      
      j.onreadystatechange=function()
      {
        
        if(j.readyState==4 )
        {
          myObj = JSON.parse(this.responseText); 
      
          console.log(myObj.id);
          var data=myObj.id;
          document.getElementById("yield").innerHTML="Yield ="+yield;
          document.getElementById("avgyield").innerHTML="Avg Yield ="+data;
        }  
        
      };
      
      j.open("GET","https://jsonplaceholder.typicode.com/todos/1" ,true);
      j.send();


      // Image Select  Bad =1 , Good = 2 , 
     
      var result_name="positive.png";

      if(yield>=1 && yield<=2)
        result_name="neutral.png";
      else if(yield>2 && yield<=4)
        result_name="positive.png";
      else
        result_name="negative.png";

      document.getElementById('image').src=result_name;
      var result_value=0;

