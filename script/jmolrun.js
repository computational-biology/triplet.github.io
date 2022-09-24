
      function runjsmol(accn, i, type){
	    Jmol._isAsync = false;

	    // last update 2/18/2014 2:10:06 PM

	    var jmolApplet0; // set up in HTML table, below
	    var jmolApplet1;
	    var jmolApplet2;

	    // logic is set by indicating order of USE -- default is HTML5 for this test page, though

	    var s = document.location.search;

	    // Developers: The _debugCode flag is checked in j2s/core/core.z.js, 
	    // and, if TRUE, skips loading the core methods, forcing those
	    // to be read from their individual directories. Set this
	    // true if you want to do some code debugging by inserting
	    // System.out.println, document.title, or alert commands
	    // anywhere in the Java or Jmol code.

	    Jmol._debugCode = (s.indexOf("debugcode") >= 0);

	    jmol_isReady = function(applet) {
		  document.title = (applet._id + " - Jmol " + Jmol.___JmolVersion)
		  Jmol._getElement(applet, "appletdiv").style.border="1px solid blue"
		  
	    }	
	    
	    selector = null;
	    jmolscript = null;
	    if(type === "FULL"){
	        selector = "select " +tripdata[i].resid1+":"+tripdata[i].chain1+","+tripdata[i].resid2+":"+tripdata[i].chain2+","+tripdata[i].resid3+":"+tripdata[i].chain3;
            jmolscript = "set antialiasDisplay;  load ="+accn+".cif; cartoon on; wireframe off; color orange; spacefill off; "+selector+"; set zoomlarge true; zoom 0; color blue; show best rotation;";
		  
        
        }else if(type === "WITHIN15A"){
            selector = "restrict within(15.0, " +tripdata[i].resid1+":"+tripdata[i].chain1+ "); select " + tripdata[i].resid1+":"+tripdata[i].chain1+","+tripdata[i].resid2+":"+tripdata[i].chain2+","+tripdata[i].resid3+":"+tripdata[i].chain3;
	        jmolscript = "set antialiasDisplay;  load ="+accn+".cif; cartoon on; wireframe off; color orange; spacefill off; "+selector+"; set zoomlarge true; zoom 0; color blue; show best rotation;";
		  
	    }else if(type === "TRIPLETONLY"){
	        selector = "restrict " + tripdata[i].resid1+":"+tripdata[i].chain1+","+tripdata[i].resid2+":"+tripdata[i].chain2+","+tripdata[i].resid3+":"+tripdata[i].chain3;
	        jmolscript = "set antialiasDisplay;  load ="+accn+".cif;  wireframe 0.15; spacefill -20; "+selector+"; set zoomlarge true; zoom 0; show best rotation;";
		  
	    }
	    var Info = {
		  width: 400,
		  height: 300,
		  debug: false,
		  color: "0xFFFFFF",
		  addSelectionOptions: false,
		  use: "HTML5",   // JAVA HTML5 WEBGL are all options
		  j2sPath: "./script/j2s", // this needs to point to where the j2s directory is.
		  jarPath: "./script/java",// this needs to point to where the java directory is.
		  jarFile: "JmolAppletSigned.jar",
		  isSigned: true,
	//	  script: "set zoomlarge false;set antialiasDisplay;load data/1a9n.pdb",
	      script: jmolscript,
	 	  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
		  readyFunction: jmol_isReady,
		  disableJ2SLoadMonitor: true,
		  disableInitialConsole: true,
		  allowJavaScript: true
		  //defaultModel: "$dopamine",
		  //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
	    }
	    
	    var Infotrip = {
		  width: 200,
		  height: 200,
		  debug: false,
		  color: "0xFFFFFF",
		  addSelectionOptions: false,
		  use: "HTML5",   // JAVA HTML5 WEBGL are all options
		  j2sPath: "./script/j2s", // this needs to point to where the j2s directory is.
		  jarPath: "./script/java",// this needs to point to where the java directory is.
		  jarFile: "JmolAppletSigned.jar",
		  isSigned: true,
	//	  script: "set zoomlarge false;set antialiasDisplay;load data/1a9n.pdb",
	      script: "set antialiasDisplay;  load ="+accn+".cif; cartoon on; wireframe off; color orange; spacefill off; restrict "+selector+"; set zoomlarge true; zoom 200%; color blue; show best rotation;",
		  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
		  readyFunction: jmol_isReady,
		  disableJ2SLoadMonitor: true,
		  disableInitialConsole: true,
		  allowJavaScript: true
		  //defaultModel: "$dopamine",
		  //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
	    }
	    
	    var Infofull = {
		  width: 400,
		  height: 300,
		  debug: false,
		  color: "0xFFFFFF",
		  addSelectionOptions: false,
		  use: "HTML5",   // JAVA HTML5 WEBGL are all options
		  j2sPath: "./script/j2s", // this needs to point to where the j2s directory is.
		  jarPath: "./script/java",// this needs to point to where the java directory is.
		  jarFile: "JmolAppletSigned.jar",
		  isSigned: true,
	//	  script: "set zoomlarge false;set antialiasDisplay;load data/1a9n.pdb",
	      script: "set antialiasDisplay;  load ="+accn+".cif; cartoon on; wireframe off; color orange; spacefill off; rotate best; set zoomlarge true; ",
		  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
		  readyFunction: jmol_isReady,
		  disableJ2SLoadMonitor: true,
		  disableInitialConsole: true,
		  allowJavaScript: true
		  //defaultModel: "$dopamine",
		  //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
	    }

	    $(document).ready(function() {
		  $("#appdivfull").html(Jmol.getAppletHtml("jmolApplet0", Info))
		  //$("#appdivtrip").html(Jmol.getAppletHtml("jmolApplet1", Info))
		  //$("#appdivfull").html(Jmol.getAppletHtml("jmolApplet2", Infofull))
	    })
	    
	
	    
	    var lastPrompt=0;

      }


