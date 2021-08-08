function readJson(xhr) {
  var data;
  if (!xhr.responseType || xhr.responseType === "text") {
    console.log(data)
      data = JSON.parse(xhr.responseText);
  }
  return data.library;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {}
xhr.open("GET", "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise-HubSpotCMS/main/data/cats.json", true);
xhr.send();

document.getElementById("allMembers").innerHTML = readJson(xhr);