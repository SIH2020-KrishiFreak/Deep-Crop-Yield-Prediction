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


  // function Show() {
      // if (document.getElementById('Div1') !== undefined) {
          // document.getElementById('Div1').style.display = 'Block';
    // } else {
          document.getElementById('Div1').style.display = 'none';
          // document.getElementById('Div1').style.display = 'Block';
    // }


     $(document).ready(function(){
        $("#submit").on('click', function(){
            $.ajax({
                url: 'http://3.17.158.27:8888/', // url where to submit the request
                type : "POST", // type of action POST || GET
                dataType : 'json', // data type
                data : $("#form").serialize(), // post data || get data
                success : function(result) {
                    document.getElementById('Div1').style.display = 'Block';
                    document.getElementById("yield").innerHTML="Yield = "+result.prediction;
                    document.getElementById("avgyield").innerHTML="Status = "+result.status;
                    // console.log(result);
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                }
            })
        });
    });

var options=["Crop","Maize", "Rice", "Sesamum", "Small millets", "Soyabean", "Sunflower", "Groundnut", "Rapeseed &Mustard", "Sugarcane", "Wheat", "Oilseeds total", "Dry chillies", "Dry ginger", "Potato", "Turmeric", "Pulses total", "Arhar/Tur", "Jute", "Mesta", "Other Kharif pulses", "Barley", "Gram", "Linseed", "Other  Rabi pulses", "Banana", "Coriander", "Garlic", "Onion", "Ragi", "Sannhamp", "Sweet potato", "Castor seed", "Safflower", "Tobacco", "Bajra", "Jowar", "Niger seed", "Cotton(lint)", "Blackgram", "Horse-gram", "Moong(Green Gram)", "Urad", "Khesari", "Masoor", "Peas & beans (Pulses)", "Papaya", "other misc. pulses", "Guar seed", "Moth", "Ginger", "Arecanut", "Black pepper", "Cashewnut", "Coconut ", "Tapioca", "Cardamom", "Rubber", "Coffee", "Tea", "Bhindi", "Bitter Gourd", "Brinjal", "Cashewnut Raw", "Drum Stick", "Jack Fruit", "Mango", "Other Fresh Fruits", "other oilseeds", "Other Vegetables", "Pineapple", "Snak Guard", "Other Cereals & Millets", "Total foodgrain", "Korra", "Samai", "Varagu", "Ash Gourd", "Beans & Mutter(Vegetable)", "Beet Root", "Bottle Gourd", "Cauliflower", "Citrus Fruit", "Cucumber", "Grapes", "Lab-Lab", "Orange", "Other Citrus Fruit", "Pome Fruit", "Pome Granet", "Redish", "Ribed Guard", "Tomato", "Water Melon", "Yam", "Pump Kin", "Cabbage", "Carrot", "Apple", "Peach", "Pear", "Plums", "Turnip", "Ber", "Litchi", "Lentil"];
$('#cropName').empty();
$.each(options, function(i, p) {
    $('#cropName').append($('<option></option>').val(p).html(p));
});

var options2= ["District","CHANGLANG", "DIBANG VALLEY", "EAST KAMENG", "EAST SIANG", "LOHIT", "LOWER SUBANSIRI", "PAPUM PARE", "TAWANG", "TIRAP", "UPPER SIANG", "UPPER SUBANSIRI", "WEST KAMENG", "WEST SIANG", "KURUNG KUMEY", "LOWER DIBANG VALLEY", "ANJAW", "LONGDING", "NAMSAI", "ARARIA", "AURANGABAD", "BANKA", "BEGUSARAI", "BHAGALPUR", "BHOJPUR", "BUXAR", "DARBHANGA", "GAYA", "GOPALGANJ", "JAMUI", "JEHANABAD", "KAIMUR (BHABUA)", "KATIHAR", "KHAGARIA", "KISHANGANJ", "LAKHISARAI", "MADHEPURA", "MADHUBANI", "MUNGER", "MUZAFFARPUR", "NALANDA", "NAWADA", "PASHCHIM CHAMPARAN", "PATNA", "PURBI CHAMPARAN", "PURNIA", "ROHTAS", "SAHARSA", "SAMASTIPUR", "SARAN", "SHEIKHPURA", "SHEOHAR", "SITAMARHI", "SIWAN", "SUPAUL", "VAISHALI", "ARWAL", "BASTAR", "BILASPUR", "DANTEWADA", "DHAMTARI", "DURG", "JANJGIR-CHAMPA", "JASHPUR", "KABIRDHAM", "KANKER", "KORBA", "KOREA", "MAHASAMUND", "RAIGARH", "RAIPUR", "RAJNANDGAON", "SURGUJA", "NARAYANPUR", "BIJAPUR", "BALOD", "BALODA BAZAR", "BALRAMPUR", "BEMETARA", "GARIYABAND", "KONDAGAON", "MUNGELI", "SUKMA", "SURAJPUR", "CHAMBA", "HAMIRPUR", "KANGRA", "KINNAUR", "KULLU", "LAHUL AND SPITI", "MANDI", "SHIMLA", "SIRMAUR", "SOLAN", "UNA", "BOKARO", "CHATRA", "DEOGHAR", "DHANBAD", "DUMKA", "EAST SINGHBUM", "GARHWA", "GIRIDIH", "GODDA", "GUMLA", "HAZARIBAGH", "KODERMA", "LOHARDAGA", "PAKUR", "PALAMU", "RANCHI", "SAHEBGANJ", "WEST SINGHBHUM", "JAMTARA", "LATEHAR", "SARAIKELA KHARSAWAN", "SIMDEGA", "KHUNTI", "RAMGARH", "ALAPPUZHA", "ERNAKULAM", "IDUKKI", "KANNUR", "KASARAGOD", "KOLLAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM", "PALAKKAD", "PATHANAMTHITTA", "THIRUVANANTHAPURAM", "THRISSUR", "WAYANAD", "AMRITSAR", "BATHINDA", "FARIDKOT", "FATEHGARH SAHIB", "FIROZEPUR", "GURDASPUR", "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "MANSA", "MOGA", "MUKTSAR", "NAWANSHAHR", "PATIALA", "RUPNAGAR", "SANGRUR", "S.A.S NAGAR", "TARN TARAN", "BARNALA", "FAZILKA", "PATHANKOT", "COIMBATORE", "CUDDALORE", "DHARMAPURI", "DINDIGUL", "ERODE", "KANCHIPURAM", "KANNIYAKUMARI", "KARUR", "MADURAI", "NAGAPATTINAM", "NAMAKKAL", "PERAMBALUR", "PUDUKKOTTAI", "RAMANATHAPURAM", "SALEM", "SIVAGANGA", "THANJAVUR", "THE NILGIRIS", "THENI", "THIRUVALLUR", "THIRUVARUR", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUVANNAMALAI", "TUTICORIN", "VELLORE", "VILLUPURAM", "VIRUDHUNAGAR", "KRISHNAGIRI", "ARIYALUR", "TIRUPPUR", "ALMORA", "BAGESHWAR", "CHAMOLI", "CHAMPAWAT", "DEHRADUN", "HARIDWAR", "NAINITAL", "PAURI GARHWAL", "PITHORAGARH", "RUDRA PRAYAG", "TEHRI GARHWAL", "UDAM SINGH NAGAR", "UTTAR KASHI"];
$('#district').empty();
$.each(options2, function(i, p) {
    $('#district').append($('<option></option>').val(p).html(p));
});

// var option3=["Season","Kharif     ", "Rabi       ", "Whole Year ", "Autumn     ", "Summer     ", "Winter     "];
// $('#season').empty();
// $.each(options3, function(i, p) {
//     $('#season').append($('<option></option>').val(p).html(p));
// });