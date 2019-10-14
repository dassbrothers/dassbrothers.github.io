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

function popmodule(obj){
	//alert(obj.value + " " + obj.id);
	var type = obj.id.split('_');
	var module = document.getElementById("module_"+ type[type.length-1]);
	$(module).empty();
	var val = obj.value;
	if(val.indexOf("top") != -1){
		let cg = {'-':'Select','psu':'PSU','pmu':'PMU'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}	
	}else{
		alert("Please select an option");
	}
	
}

function popsubmodule(obj){
	//alert(obj.value + " " + obj.id);
	var type = obj.id.split('_');
	var module = document.getElementById("submodule_"+ type[type.length-1]);
	$(module).empty();
	var val = obj.value;
	if(val.indexOf("psu") != -1){
		let cg = {'-':'Select','ldo1':'LDO_1','ldo2':'LDO_2'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}	
	}else if(val.indexOf("pmu") != -1){
		alert("PMU logic selected");
	}else{
		alert("Please select an option");
	}
}


function popparams(obj){
	//alert(obj.value + " " + obj.id);
	var type = obj.id.split('_');
	var module = document.getElementById("params_"+ type[type.length-1]);
	$(module).empty();
	var val = obj.value;
	if(val.indexOf("ldo1") != -1){
		let cg = {'-':'Select','vout':'Vout','vdd':'Vdd','vin':'Vin'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}	
	}else if(val.indexOf("ldo2") != -1){
		let cg = {'-':'Select','vout':'Vout','vdd':'Vdd'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}	
	}
	else{
		alert("Please select an option");
	}
}

function popcovobj(obj){
	//alert(obj.value + " " + obj.id);
	var type = obj.id.split('_');
	var module = document.getElementById("coverage_object_"+ type[type.length-1]);
	$(module).empty();
	var val = obj.value;
	if(val.indexOf("vout") != -1){
		let cg = {'-':'Select','vout_cg1':'Vout_cg1','vout_cg2':'Vout_cg2'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}
	}else if(val.indexOf("vdd") != -1){
		let cg = {'-':'Select','vdd_cg1':'Vdd_cg1'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}
	}else if(val.indexOf("vin") != -1){
		let cg = {'-':'Select','vin_cg2':'Vin_cg2'};
		for(let c in cg){$(module).append($('<option>',{value: c,text: cg[c]}))}
	}else{
		alert("Please select an option");
	}
}


$(document).ready(function() { 
	$("#add").click(function() {
		
		/*var div = "<div id='child'> <select class='coverage_object'> <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id='coverage_type' > <option value='-'>Select</option> </select> <br> </div> " ;
		*/
		
		/*var div = "<div id='child'> <select id=coverage_object_"+global_cnt+" onchange='populate(this)'> <option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> </select> <select id=coverage_type_"+global_cnt +" > </select> <br> </div>  ";
		*/
		
		/*
		<option value='-'>Select</option> <option value = 'vout_cg1'> Vout_cg1 </option> <option value = 'vdd_cg1'> vdd_cg1 </option> <option value = 'vout_cg2'> vout_cg2 </option> <option value = 'vin_cg2'> vin_cg2 </option> 
		*/
		
		var div = "<div id='child'> <select id=top_module_"+ global_cnt+ " onchange='popmodule(this)'> <option value='-'> Select</option> <option value='top'> TOP</option></select> <select id=module_" +global_cnt+ " onchange='popsubmodule(this)'> </select> <select id=submodule_" +global_cnt+ " onchange='popparams(this)'> </select> <select id=params_"+global_cnt+" onchange='popcovobj(this)'> </select> <select id=coverage_object_"+global_cnt+" onchange='populate(this)'> </select> <select id=coverage_type_"+global_cnt +" > </select> <br> </div>  ";
		
		
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
		para.innerHTML = "Bins [b1:b2] , [b3:b4] ...  are hit between the time interval/hit ratio > ... " ; 
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

$(document).ready(function() { 
	
		var div = "<div id=range_"+ global_cnt +" style='width:30%; float:left' > <select> <option value='-'> Select</option> " + "<option value='gt'>Greater than </option> <option value='lt'>Less than </option> <option value='eq'>Equals </option> <option value='neq'>Not equals</option> <option value='btwn'> Between </option> <option value='nbtwn'> Not Between </option> </select> </div>" +
		"<div id=lval_" + global_cnt + " style='width:30%; float:left'>	<input type='text' name='hr' style='width : 90%'> </div> " +
		" <div id=rval_"+ global_cnt + " style='width:30%; float:left'> <input type='text' name='hr' style='width : 90%'> </div> " +
		"<div id=button_" + global_cnt + " style='width:10%; float:right'> </div>"+
		"<br>";
		
	$("#Add1").click(function() {
		global_cnt++;
		$("#child_1").append(div);
	});
	$("#Add2").click(function() {
		global_cnt++;
		$("#child_2").append(div);
	});
	$("#Add3").click(function() {
		global_cnt++;
		$("#child_3").append(div);
	});
});
