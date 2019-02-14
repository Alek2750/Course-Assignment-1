var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

function arrayToString(arr) {
    var array1 = arr;
    var ArrAsStr = "";
    for (let i = 0; i < array1.length; i++) {
        ArrAsStr = ArrAsStr.concat(array1[i] + "<br>");
    }
    return ArrAsStr;
}
var sorted = false;

document.getElementById('boys').innerHTML = arrayToString(boys);
document.getElementById('girls').innerHTML = arrayToString(girls);
document.getElementById('all').innerHTML = arrayToString(boys.concat(girls));

document.getElementById("removeboy").addEventListener("click", removeBoy);
function removeBoy(event) {
    event.preventDefault();
    if (document.getElementById("first").checked == true) {
        boys.shift();
    }
    else {
        boys.pop();
    }
    document.getElementById("boys").innerHTML = arrayToString(boys);
    document.getElementById("all").innerHTML = arrayToString(boys.concat(girls));
}

document.getElementById("addboy").addEventListener("click", addBoy);

function addBoy(event) {
    event.preventDefault();
    var name = document.getElementById("newboy").value;
    boys.push(name);
    document.getElementById("newboy").value = "";
    document.getElementById("boys").innerHTML = arrayToString(boys);
    document.getElementById("all").innerHTML = arrayToString(boys.concat(girls));
}

document.getElementById("addgirl").addEventListener("click", addGirl);

function addGirl(event) {
    event.preventDefault();
    var name = document.getElementById("newgirl").value;
    girls.push(name);
    document.getElementById("newgirl").value = "";
    document.getElementById("girls").innerHTML = arrayToString(girls);
    document.getElementById("all").innerHTML = arrayToString(boys.concat(girls));
}

document.getElementById("removegirl").addEventListener("click", removeGirl);
function removeGirl(event) {
    event.preventDefault();
    if (document.getElementById("first").checked == true) {
        girls.shift();
    }
    else {
        girls.pop();
    }
    document.getElementById("girls").innerHTML = arrayToString(girls);
    document.getElementById("all").innerHTML = arrayToString(boys.concat(girls));
}

document.getElementById("reverse").addEventListener("click", reverseAll);
function reverseAll(event) {
    event.preventDefault();
    var allArr = boys.concat(girls);
    allArr = allArr.reverse();
    document.getElementById("all").innerHTML = arrayToString(allArr);
}

document.getElementById("sort").addEventListener("click", sortAll);
function sortAll(event) {
    if (sorted == false) {
        event.preventDefault();
        var allArr = boys.concat(girls);
        allArr.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a == b) return 0;
            return a < b ? 1 : -1;
        });
        document.getElementById("all").innerHTML = arrayToString(allArr);
        sorted = true;
    }
    else {
        event.preventDefault();
        var allArr = boys.concat(girls);
        allArr.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a == b) return 0;
            return a < b ? 1 : -1;
        });
        allArr = allArr.reverse();
        document.getElementById("all").innerHTML = arrayToString(allArr);
        sorted = false;
    }
}

/*document.getElementById('boys').innerHTML=boys;
function showB(){
    for (let i = 0; i < boys.length; i++) {
        document.writeln(boys[i]);        
    }
}*/