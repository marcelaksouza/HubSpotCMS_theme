
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


// let content = "";
// content += "<p><b>" + member.name + "</b></p>";
// content += `<img src="${member.photo}" alt="Member photo">`;
// content += "<p>" + member.role + "</p>";
document.getElementById("allMembers").innerHTML = readJson(xhr);