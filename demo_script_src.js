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
		
		var div = "<div id='child'> <select class='coverage_object'> <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id='coverage_type' > <option value='-'>Select</option> </select> <br> </div> " ;
		
		$("#top_container").append(div);
	});
});

$(function(){
    $("#myTable").tablesorter();
});

function myFunction() {
  var input, table, tr, td, i, txtValue;
  var flag = 1;
  input = document.getElementById("filterVin");
	if(!(input.value.indexOf("-") > -1 )){
		flag = -1;
	}
	  var filter = input.value.toUpperCase().split('-');
	  //console.log(filter);
	  table = document.getElementById("myTable");
	  tr = table.getElementsByTagName("tr");
	  //console.log("checking for : "+filter[0] + " : " + filter[1]);
		for (i = 0; i < tr.length; i++) {	
			td = tr[i].getElementsByTagName("td")[3];
			if (td) {
			  txtValue = td.textContent || td.innerText;
			  console.log(txtValue);
			  //if (txtValue.toUpperCase().indexOf(filter[j]) > -1) {
			  if(flag == -1){
				tr[i].style.display = "";
			  }
			  else if(txtValue >= filter[0] && txtValue <= filter[1]){
				console.log("found");
				tr[i].style.display = "";
			  } else {
				tr[i].style.display = "none";
			  }
			}
		}
}

function toggle(source) {
  checkboxes = document.getElementsByName('row');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
