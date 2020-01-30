let members = data.results[0].members;
function fillTable(members) {
    var table = document.getElementById("senate-data");
    for (let i = 0; i < members.length; i++) {
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = members[i].last_name + " " + members[i].first_name + " " + (members[i].middle_name || "");
        cell2.innerHTML = members[i].party;
        cell3.innerHTML = members[i].state;
        cell4.innerHTML = members[i].seniority;
        cell5.innerHTML = members[i].votes_with_party_pct + "%";
    }
}
fillTable(members);

function checkBoxFilter(){
	var rep = document.getElementById("rep");
    var dem = document.getElementById("dem");
    var ind = document.getElementById("ind");
	var filteredData = [];
	for (let i = 0; i < members.length; i++) {
		if (rep.checked == true && members[i].party == "R") {
			filteredData.push(members[i]);
		}else if(dem.checked == true && members[i].party == "D"){
			filteredData.push(members[i]);
		}else if(ind.checked == true && members[i].party == "I"){
            filteredData.push(members[i]);
        }
	}
	listFilter(filteredData)
}
function listFilter(members){

	var e = document.getElementById("mySelect");
	var result = e.options[e.selectedIndex].text;
	var filteredData = []
	for (let i = 0; i < members.length; i++) {
		if ( e.value == 'tn' && members[i].party == 'TN' || e.value == 'all') {
			filteredData.push(members[i]);
		}else if( e.value == 'NH'  && members[i].party == 'NH' || e.value == 'all'){
			filteredData.push(members[i]);
		} 
	}
	fillTable(filteredData);	
}
