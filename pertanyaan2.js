
      function cek(){
	
    var tabel21= document.getElementById("tabel21").value;
    var tabel22= document.getElementById("tabel22").value;
    var tabel23=  document.getElementById("tabel23").value;
    var tabel24=  document.getElementById("tabel24").value;
    var tabel31= document.getElementById("tabel31").value;
    var tabel32= document.getElementById("tabel32").value;
    var tabel33=  document.getElementById("tabel33").value;
    var tabel34=  document.getElementById("tabel34").value;
    var tabel31= document.getElementById("tabel31").value;
    var tabel32= document.getElementById("tabel32").value;
    var tabel33=  document.getElementById("tabel33").value;
    var tabel34=  document.getElementById("tabel34").value;
    var tabel41= document.getElementById("tabel41").value;
    var tabel42= document.getElementById("tabel42").value;
    var tabel43=  document.getElementById("tabel43").value;
    var tabel44=  document.getElementById("tabel44").value;   
		
        if( tabel21.toLowerCase() == "bahasa indonesia"){
					
					document.getElementById("tabel21").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel21").style.border="3px solid red";
					
				} 
        
        if( tabel22 == "8.37"){
					
					document.getElementById("tabel22").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel22").style.border="3px solid red";
					
				} 

        if( tabel23 == "8.86"){
					
					document.getElementById("tabel23").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel23").style.border="3px solid red";
					
				}
        if( tabel24 == "8.73"){
					
					document.getElementById("tabel24").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel24").style.border="3px solid red";
					
				} 

        if( tabel31.toLowerCase() == "matematika"){
					
					document.getElementById("tabel31").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel31").style.border="3px solid red";
					
				} 

        if( tabel32 == "9.02"){
					
					document.getElementById("tabel32").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel32").style.border="3px solid red";
					
				} 

        if( tabel33 == "8.89"){
					
					document.getElementById("tabel33").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel33").style.border="3px solid red";
					
				}
        if( tabel34 == "9.20"){
					
					document.getElementById("tabel34").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel34").style.border="3px solid red";
					
				} 

        if( tabel41.toLowerCase() == "ipa"){
					
					document.getElementById("tabel41").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel41").style.border="3px solid red";
					
				} 
        if( tabel42 == "8.67"){
					
					document.getElementById("tabel42").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel42").style.border="3px solid red";
					
				} 
        if( tabel43 == "8.90"){
					
					document.getElementById("tabel43").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel43").style.border="3px solid red";
					
				} 
        if( tabel44 == "9.00"){
					
					document.getElementById("tabel44").style.border="3px solid green";
				}
        else{
					
					document.getElementById("tabel44").style.border="3px solid red";
					
				} 


			}

            function Ulang(){
            // document.getElementById("tabel11").style="none";
            // document.getElementById("tabel111").style="none";
            // document.getElementById("tabel12").style="none";
            // document.getElementById("tabel13").style="none";
            // document.getElementById("tabel14").style="none";
            // document.getElementById("tabel21").style="none";
            // document.getElementById("tabel22").style="none";
            // document.getElementById("tabel23").style="none";
            // document.getElementById("tabel24").style="none";
            // document.getElementById("tabel31").style="none";
            // document.getElementById("tabel32").style="none";
            // document.getElementById("tabel33").style="none";
            // document.getElementById("tabel34").style="none";
            // document.getElementById("tabel31").style="none";
            // document.getElementById("tabel32").style="none";
            // document.getElementById("tabel33").style="none";
            // document.getElementById("tabel34").value;
            // document.getElementById("tabel41").value;
            // document.getElementById("tabel42").value;
            // document.getElementById("tabel43").value;
            // document.getElementById("tabel44").value;  

            let a=document.querySelectorAll(".a")
            for(let i=0;i<a.length;i++){
                a[i].style="none";
                a[i].value="";
            }

            }