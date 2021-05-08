
//submit-function/
function submit() {
  input_paragraph = [];

    for (var j = 1; j <= 8; j++) {
     input_paragraph.push(document.getElementById("your_paragraph_" + j).value);
    }
document.getElementById("show_paragraph").innerHTML=input_paragraph.join(" ");

}

