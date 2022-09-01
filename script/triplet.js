
obj1 = JSON.stringify(tripjsondata);

var tripdata = JSON.parse(obj1);


function show_trip_details(){
      var accnval = document.getElementById("accn").value;
      var str = "";
      for(var i=0; i<tripdata.length; ++i){
	    if(tripdata[i].accn === accnval){
		  str = str + tripdata[i].accn + "   " + tripdata[i].tripname + "   " + tripdata[i].edgeinfo +" "+ "<br>";
	    }
      }
      document.getElementById("jsontest").innerHTML = str;
}
