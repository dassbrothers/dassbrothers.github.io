$(document).ready(function() { 
	$("#but").click(function() {
		
		var selectedText = "";
		if ($("#vdd").is( 
		  ":checked")) { 
			//alert("vdd Check box is Checked"); 
			selectedText = selectedText + "vdd" + " " + $("#vddArtefact").val() + "," ;
			//alert($("#vddArtefact").val());
		
		} else { 
			//alert("vdd Check box is Unchecked"); 
		}
		
		if ($("#vout").is( 
		  ":checked")) { 
			//alert("vout Check box is Checked"); 
			selectedText = selectedText + "vout" + " " + $("#voutArtefact").val() + "," ;
		} else { 
			//alert("vout Check box is Unchecked"); 
		}
		
		if ($("#vin").is( 
		  ":checked")) { 
			//alert("vin Check box is Checked");
			selectedText = selectedText + "vin" + " " + $("#vinArtefact").val() + "," ; 
		} else { 
			//alert("vin Check box is Unchecked"); 
		} 
		//checkbox selection done. Now see dropdown selection.
		/*$("#vddArtefact").change(function() {
			alert( $('option:selected', this).text() );
		});*/
		
		//document.getElementById("demo").innerHTML = "You selected: " + selectedText + ". Populating data based on the above selection" ;
		$("#data").css("display","block");
		//document.getElementById("data").style.display = "visible";
		
	}); 
}); 

$(document).ready(function() { 
	$(".coverage_object").change(function () {
        var end = this.value;
        $("#coverage_type").empty();
        if(end.indexOf("cg1") != -1) {
			let cg = {'-':'Select','range':'Range','level':'Level','deglitch':'Deglitch'};
			for(let c in cg){$('#coverage_type').append($('<option>',{value: c,text: cg[c]}))}
			
		}else if(end.indexOf("cg2") != -1){
			let cg = {'-':'Select','level':'Level','ddt':'Ddt'};
			for(let c in cg){$('#coverage_type').append($('<option>',{value: c,text: cg[c]}))}
		}else
			alert("Please select an option");
    });
});

$(document).ready(function() { 
	$("#add").click(function() {
		
		/*var div = "<div='child'> <select id='coverage_object' >	<option value='-'>Select</option> <option value = 'Range_vout'> Range_vout </option> <option value = 'Cov_vout'> Cov_vout </option> <option value = 'Cov_vdd'> Cov_vdd </option> </select> <select id='coverage_type' > <option value='-'>Select</option> <option value = 'vout'> Vout </option> <option value = 'vdd'> Vdd </option> <option value = 'vin'> Vin </option> </select> <br> </div>";*/
		
		var div = "<div='child'> <select class='coverage_object' > <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id='coverage_type' > <option value='-'>Select</option> </select> <br> </div> " ;
		
		$("#top_container").append(div);
	});
});



function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
