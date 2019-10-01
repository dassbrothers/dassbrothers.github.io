var global_cnt = 1;
$(document).ready(function() { 
	$("#but").click(function() {
		$("#data").css("display","block");
	}); 
}); 
/*$(document).ready(function() { 
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
*/
function populate(obj){
	//alert(obj.value + " " +obj.id);
	var type = obj.id.split('_');
	//alert(type[type.length-1]);
	var cov_type_id = document.getElementById("coverage_type_" + type[type.length-1]);
	var val = obj.value;
	if(val.indexOf("cg1") != -1){
		let cg = {'-':'Select','range':'Range','level':'Level','deglitch':'Deglitch'};
		for(let c in cg){$(cov_type_id).append($('<option>',{value: c,text: cg[c]}))}	
		console.log(val.indexOf('cg1'));
	}else if(val.indexOf("cg2") != -1){
		let cg = {'-':'Select','level':'Level','ddt':'Ddt'};
		for(let c in cg){$(cov_type_id).append($('<option>',{value: c,text: cg[c]}))}
		console.log(val.indexOf('cg2'));
	}else
		alert("Please select an option");
}

$(document).ready(function() { 
	$("#add").click(function() {
		
		/*var div = "<div id='child'> <select class='coverage_object'> <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id='coverage_type' > <option value='-'>Select</option> </select> <br> </div> " ;
		*/
		var div = "<div id='child'> <select id=coverage_object_"+global_cnt+" onchange='populate(this)'> <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id=coverage_type_"+global_cnt +" > </select> <br> </div>  ";
		global_cnt++;
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

/*****************/
//script for next page.html
/*****************/
function populate1(obj){
	//alert(obj.value + " " +obj.id);
	var type = obj.id.split('_');
	//alert(type[type.length-1]);
	var cov_type_id = document.getElementById("coverage_type_"+type[type.length - 1]);
	$(cov_type_id).empty();
	var val = obj.value;
	if(val.indexOf("cg1") != -1){
		let cg = {'-':'Select','range':'Range','level':'Level','deglitch':'Deglitch'};
		for(let c in cg){$(cov_type_id).append($('<option>',{value: c,text: cg[c]}))}	
		console.log(val.indexOf('cg1'));
	}else if(val.indexOf("cg2") != -1){
		let cg = {'-':'Select','level':'Level','ddt':'Ddt'};
		for(let c in cg){$(cov_type_id).append($('<option>',{value: c,text: cg[c]}))}
		console.log(val.indexOf('cg2'));
	}else
		alert("Please select an option");
}

function display(){
	var sim_id = document.getElementById("sim_id");
	var bin = document.getElementById("bins");
	var time = document.getElementById("time");
	var para = document.getElementById("display");
	if(bin.checked){
		//alert("Display bins");
		para.innerHTML = "Bins b1 .. b4 are hit between the time interval/hit ratio > ... " ; 
	}
	if (time.checked){
		//alert("Display time");
		para.innerHTML = "Time [t1:t2] , [t3:t4]  ... " ; 
	}
	if(sim_id.checked){
		var i =2;
		for(j=i ; j<14;j+=2){
			var row = document.getElementById("row"+j);
			row.remove();
		}
	}
}
