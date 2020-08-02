fetch("https://jsonplaceholder.typicode.com/users") 
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(json => { 
   
        // Create a variable to store HTML 
        let li = `<tr><th>Name</th><th>Email</th></tr>`; 
        
        // Loop through each data and add a table row 
        json.forEach(user => { 
            li += `<tr> 
                <td>${user.name} </td> 
                <td>${user.email}</td>          
            </tr>`; 
        }); 
   
    // Display result 
    document.getElementById("users").innerHTML = li; 
}); 



var mymap = L.map('mapid').setView([25.5941, 85.1376], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F2aXNoMTIzNDUiLCJhIjoiY2s1dXdpYzE5MHh3eTNucnppaWdzcnN6diJ9.P_dWAsA1odFQMz8M3uTmNA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2F2aXNoMTIzNDUiLCJhIjoiY2s1dXdpYzE5MHh3eTNucnppaWdzcnN6diJ9.P_dWAsA1odFQMz8M3uTmNA'
}).addTo(mymap);

var api = "webapi/domain";
$.get(api, function (domain, status) {
    if (status == "success") {
        var domainOptions = "";
        for (var i = 0; i < domain.length; i++) {
            domainOptions += '<option value="' + domain[i].id + '">' + domain[i].discipline + ' ' + domain[i].branch + '</option>';
        }
        $("#domainId").append(domainOptions);
    }
});