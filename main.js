let members = data.results[0].members;
function fillTable(mems) {
    var table = document.getElementById("senate-data");
    while(table.hasChildNodes())
	{
		table.removeChild(table.firstChild);
	}
    for (let i = 0; i < mems.length; i++) {
        var row= table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = mems[i].last_name + " " + mems[i].first_name + " " + (mems[i].middle_name || "");
        cell2.innerHTML = mems[i].party;
        cell3.innerHTML = mems[i].state;
        cell4.innerHTML = mems[i].seniority;
        cell5.innerHTML = mems[i].votes_with_party_pct + "%";
    }
}
fillTable(members);

function checkBoxFilter(){
    var republic = document.getElementById("rep");
    var  democrat = document.getElementById("dem");
    var  independent = document.getElementById("ind");
    var showAll = !republic.checked && !democrat.checked && !independent.checked
    if(showAll){
        fillTable(members);
        return;
    }
	var filteredData = [];
	for (let i = 0; i < members.length; i++) {
		if (republic.checked  && members[i].party == "R") {
			filteredData.push(members[i]);
		}else if(democrat.checked && members[i].party == "D"){
			filteredData.push(members[i]);
		}else if(independent.checked && members[i].party == "I"){
			filteredData.push(members[i]);
		}
	}
	listFilter(filteredData);
}
document.getElementById("rep").addEventListener('change', checkBoxFilter);
document.getElementById("dem").addEventListener('change',checkBoxFilter);
document.getElementById("ind").addEventListener('change',checkBoxFilter);
 
function getState(mems){
    var stateArr = [];
    for (let i = 0; i < mems.length; i++) {
        if (!stateArr.includes(mems[i].state))
        stateArr.push(mems[i].state);
    }
   return stateArr.sort();
}
var stateItems = getState(members);
addItemsToDropDown(stateItems)
function addItemsToDropDown(stateItems){
    var x = document.getElementById("mySelect");
    for (let i = 0; i < stateItems.length; i++) {
        var option =document.createElement("option");
        option.text = option.value = stateItems[i]; 
        x.add(option);
    }
  }
  function listFilter(members){
	var e = document.getElementById("mySelect");
    var result = e.options[e.selectedIndex].text;
    var x = e.selectedIndex;
    var y = document.getElementsByTagName("option")[x].value;
	var filteredData = []
	for (let i = 0; i < members.length; i++) {
		if (members[i].state == y || e.value == 'all' ) {
			filteredData.push(members[i]);
		} 
    }
    fillTable(filteredData);

}

document.getElementById("mySelect").addEventListener('change',checkBoxFilter);
