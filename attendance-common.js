function partyCounter(members ,x){
    var arr = [];
    for (var i = 0 ; i < members.length ; i++) {
        if(members[i].party == x){
           arr.push(members[i]);
        }
    }
    return arr;
}
function votAvg(ar){
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
          sum += ar[i].votes_with_party_pct;     
    }
    return  (sum / ar.length);
}
function fillTable(statistics, isSenate) {
    var totalOfReps = statistics.nrOfDemocrats + (isSenate ? statistics.nrOfIndependents : 0) + statistics.nrOfRepublicans;
var totalOfVoted = (statistics.democratVoteAvg  + statistics.republicanVoteAvg + (isSenate ? statistics.independentVoteAvg : 0))  / (isSenate ? 3 : 2) ;
    var table = document.getElementById("senate-data");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "Party";
        cell2.innerHTML = "Nº of Reps";
        cell3.innerHTML = "% Voted w/ Party";
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "Democrats";
        cell2.innerHTML = statistics.nrOfDemocrats;
        cell3.innerHTML = statistics.democratVoteAvg.toFixed(2);
        var row = table.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "Republicans";
        cell2.innerHTML = statistics.nrOfRepublicans;
        cell3.innerHTML = statistics.republicanVoteAvg.toFixed(2);
        if(isSenate){
            var row = table.insertRow(3);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "Independents";
            cell2.innerHTML = statistics.nrOfIndependents;
            cell3.innerHTML = statistics.independentVoteAvg.toFixed(2);
        }
        var row = table.insertRow(isSenate ? 4 : 3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "Total";
        cell2.innerHTML = totalOfReps;
        cell3.innerHTML = totalOfVoted.toFixed(2);
}
/*-------------------------------------------------------------LeastEngaged*/
function leastEngaged(members){
    var missedVotesArr = [];
    var leastArr = [];
    missedVotesArr = members.sort(function(a,b){return a.missed_votes_pct - b.missed_votes_pct});
        var showrows = missedVotesArr.length - (missedVotesArr.length * 0.1+1) ;
        for (let i = missedVotesArr.length-1 ; i > showrows ; i--) {
            leastArr.push(missedVotesArr[i]);  
        }
        return leastArr;
}

function showTable(leastArr) {
    var table = document.getElementById("least-engaged");
    for (let i = 0; i < leastArr.length; i++) {
        var row= table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = leastArr[i].last_name +","+ leastArr[i].first_name;
        cell2.innerHTML = leastArr[i].missed_votes;
        cell3.innerHTML = leastArr[i].missed_votes_pct;
    }
}
/*-------------------------------------------------------------MostEngaged*/
function mostEngaged(members){
    var missedVotesArr = [];
    var mostArr = [];
    missedVotesArr = members.sort(function(a,b){return a.missed_votes_pct - b.missed_votes_pct});
        var showrows = missedVotesArr.length * 0.1 ;
        for (let i = 0 ; i < showrows ; i++) {
            mostArr.push(missedVotesArr[i]);  
        }
        return mostArr;
}
function insertTable(mostArr) {
    var table = document.getElementById("most-engaged");
    for (let i = 0; i < mostArr.length; i++) {
        var row= table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = mostArr[i].last_name +","+ mostArr[i].first_name;
        cell2.innerHTML = mostArr[i].missed_votes;
        cell3.innerHTML = mostArr[i].missed_votes_pct;
    }
}


/*-------------------------------------------------------------LeastLoyalEngaged*/
function leastLoyal(members){
    var votesArr = [];
    var leastLoyalArr = [];
    votesArr = members.sort(function(a,b){return a.votes_with_party_pct - b.votes_with_party_pct});
        var showrows = votesArr.length - (votesArr.length * 0.1+1) ;
        for (let i = votesArr.length-1 ; i > showrows ; i--) {
            leastLoyalArr.push(votesArr[i]);  
        }
        return leastLoyalArr;
}

function showLoyalTable(leastLoyalArr) {
    var table = document.getElementById("least-engaged");
    for (let i = 0; i < leastLoyalArr.length; i++) {
        var row= table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = leastLoyalArr[i].last_name +","+ leastLoyalArr[i].first_name;
        cell2.innerHTML = leastLoyalArr[i].total_votes;
        cell3.innerHTML = leastLoyalArr[i].votes_with_party_pct;
    }
}

/*-------------------------------------------------------------MostLoyalEngaged*/
function mostLoyal(members){
    var votesArr = [];
    var mostLoyalArr = [];
    votesArr = members.sort(function(a,b){return a.votes_with_party_pct - b.votes_with_party_pct});
        var showrows = votesArr.length * 0.1 ;
        for (let i = 0 ; i < showrows ; i++) {
            mostLoyalArr.push(votesArr[i]);  
        }
        return mostLoyalArr;
}
/*console.log(mostEngaged(members));*/

function insertLoyalTable(mostLoyalArr) {
    var table = document.getElementById("most-engaged");
    for (let i = 0; i < mostLoyalArr.length; i++) {
        var row= table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = mostLoyalArr[i].last_name +","+ mostLoyalArr[i].first_name;
        cell2.innerHTML = mostLoyalArr[i].total_votes;
        cell3.innerHTML = mostLoyalArr[i].votes_with_party_pct;
    }
}



function getData(url, isSenate) {
const options = {
    headers: new Headers({'X-API-Key': 'V81SlpEOhDtgWaZ4eaBufh1Tf8S9HQlKaZiU3Rrw'})
};
fetch(url, options)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        let members = data.results[0].members;
        var statistics = {};
        statistics.democrats = partyCounter(members,"D");
        statistics.republicans = partyCounter(members, "R");
        statistics.independents = partyCounter(members, "I");
        statistics.nrOfDemocrats = statistics.democrats.length;
        statistics.nrOfRepublicans = statistics.republicans.length;
        statistics.nrOfIndependents = statistics.independents.length;
        statistics.democratVoteAvg = votAvg(statistics.democrats);
        statistics.republicanVoteAvg = votAvg(statistics.republicans);
        statistics.independentVoteAvg = votAvg(statistics.independents);
        var x = "";
        partyCounter(members ,x);
        var ar = [];
        votAvg(ar);
        fillTable(statistics, isSenate);
        var leastArr = leastEngaged(members);
        var mostArr = mostEngaged(members);
        showTable(leastArr);
        insertTable(mostArr);
        var leastLoyalArr = leastLoyal(members);
        var mostLoyalArr = mostLoyal(members);
        showLoyalTable(leastLoyalArr);
        insertLoyalTable(mostLoyalArr);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
var url = window.location.pathname;
const senateURL = 'https://api.propublica.org/congress/v1/113/senate/members.json';
const houseURL = 'https://api.propublica.org/congress/v1/113/house/members.json';
var filename = url.substring(url.lastIndexOf('/')+1);
isSenate = false;
 if (filename == 'senate-attendance.html' || filename == 'senate-loyalty.html') {//senate 
    isSenate = true;
  getData(senateURL, isSenate);
 }if (filename =='house-attendance.html'|| filename == 'house-loyalty.html') { //house
    isSenate = false
   getData(houseURL, isSenate);
 }
