feather.replace()

      function cek(){		
        var tabel21= document.getElementById("tabel21").value;
        var tabel22= document.getElementById("tabel22").value;
        var tabel31= document.getElementById("tabel31").value;
        var tabel32= document.getElementById("tabel32").value;
        var tabel41= document.getElementById("tabel41").value;
        var tabel42= document.getElementById("tabel42").value;
		    var tabel51= document.getElementById("tabel51").value;
        var tabel52= document.getElementById("tabel52").value;
		    var tabel61= document.getElementById("tabel61").value;
        var tabel62= document.getElementById("tabel62").value;
			
        if( tabel21.toLowerCase()== "senin"){
					
					document.getElementById("tabel21").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel21").style.border="3px solid red";
					
				}
        if( tabel22 == "35"){
					
					document.getElementById("tabel22").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel22").style.border="3px solid red";
					
				} 
        
        if( tabel31.toLowerCase() == "selasa"){
					
					document.getElementById("tabel31").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel31").style.border="3px solid red";
					
				}
        if( tabel32 == "20"){
					
					document.getElementById("tabel32").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel32").style.border="3px solid red";
					
				} 

        if( tabel41.toLowerCase() == "rabu"){
					
					document.getElementById("tabel41").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel41").style.border="3px solid red";
					
				}
        if( tabel42 == "22"){
					
					document.getElementById("tabel42").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel42").style.border="3px solid red";
					
				} 

        if( tabel51.toLowerCase() == "kamis"){
					
					document.getElementById("tabel51").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel51").style.border="3px solid red";
					
				}
        if( tabel52 == "15"){
					
					document.getElementById("tabel52").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel52").style.border="3px solid red";
					
				} 

        if( tabel61.toLowerCase() == "jum'at"){
					
					document.getElementById("tabel61").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel61").style.border="3px solid red";
					
				}
        if( tabel62 == "5"){
					
					document.getElementById("tabel62").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel62").style.border="3px solid red";
					
				} 

			}

      function Ulang(){
	  
      document.getElementById("tabel21").style="none";
      document.getElementById("tabel22").style="none";
      document.getElementById("tabel31").style="none";
      document.getElementById("tabel32").style="none";
      document.getElementById("tabel41").style="none";
      document.getElementById("tabel42").style="none";
      document.getElementById("tabel51").style="none";
      document.getElementById("tabel52").style="none";
      document.getElementById("tabel61").style="none";
      document.getElementById("tabel62").style="none";


      
      document.getElementById("tabel21").value="";
      document.getElementById("tabel22").value="";
      document.getElementById("tabel31").value="";
      document.getElementById("tabel32").value="";
      document.getElementById("tabel41").value="";
      document.getElementById("tabel42").value="";
      document.getElementById("tabel51").value="";
      document.getElementById("tabel52").value="";
      document.getElementById("tabel61").value="";
      document.getElementById("tabel62").value="";
      }
