
obj1 = JSON.stringify(tripjsondata);

var tripdata = JSON.parse(obj1);


function is_std_basepair(x){
      var a = x.substr(0,1);
      var b = x.substr(2,1);
      if((a === "W" || a === "H" || a === "S") && (b === "W" || b === "H" || b ==="S")){
	    return true;
      }else{
	    return false;
      }
}

function show_trip_details(){
      var accnval = document.getElementById("accn").value;
      var tripnameval = document.getElementById("tripname").value;
      var edge1 = document.getElementById("edge1").value;
      var ori1 = document.getElementById("orien1");
      var orival1;
      for(var i = 0; i < ori1.length; i++){
	    if(ori1[i].checked === true){
		  orival1 = ori1[i].value;
	    }
      }

      var edge2 = document.getElementById("edge2").value;
      var ori2 = document.getElementsByName("orient2");
      var orival2;
      for(var i = 0; i < ori2.length; i++){
	    if(ori2[i].checked === true){
		  orival2 = ori2[i].value;
	    }
      }
//      window.alert(orival2);
//      var ori2 = document.getElementByName("orient2").value;
      var str = "";
      for(var i=0; i<tripdata.length; ++i){
	    if(tripdata[i].compname === "T1" && is_std_basepair(tripdata[i].bpname1) == true && is_std_basepair(tripdata[i].bpname23) == true){
		  if((accnval.length === 0 || tripdata[i].accn === accnval)  
			&& 
			(tripnameval.length === 0 || tripdata[i].tripname === tripnameval)
			&&
			(edge2 === "ALL" || tripdata[i].bpname23.substr(0,3) === edge2)
			&&
			(orival2 === "all"|| orival2 === tripdata[i].bpname23.substr(3,1))
		  ){
			str = str + tripdata[i].accn + "   " + tripdata[i].tripname + "   " + tripdata[i].edgeinfo + " <a href=# onclick=\"runjsmol('" + tripdata[i].accn + "', 'select " +tripdata[i].resid1+":"+tripdata[i].chain1+","+tripdata[i].resid2+":"+tripdata[i].chain2+","+tripdata[i].resid3+":"+tripdata[i].chain3+"' );\">View in JSMol</a>" + "<br>";
		  }

	    }
      }
      document.getElementById("jsontest").innerHTML = str;
}
