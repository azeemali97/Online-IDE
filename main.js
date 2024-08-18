function run() {
  let html = document.getElementById("htmlcode").value;
  let css = document.getElementById("csscode").value;
  let js = document.getElementById("jscode").value;
  let outer = document.getElementById("outer");

  outer.contentDocument.body.innerHTML = html + "<style>"+ css +"</style>";
  outer.contentWindow.eval(js);
}


  
  var editor = CodeMirror.fromTextArea(document.getElementsByName("html"), {
    lineNumbers: true,
    mode: "text/html",
    matchBrackets: true
  });



function downloadFile() {
  // Get the text from the textarea
  const text = document.getElementById('htmlcode').value;
  const  text2 = document.getElementById('csscode').value;

  // Create a Blob object with the text content
  const blob = new Blob([text], { type: 'text/html' });
  const blob2 = new Blob([text2], { type: 'css' });

  // Create a link element to trigger the download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'download.html'; // Set the download file name

  // Append the link to the body (not visible to the user)
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up by removing the link element
  document.body.removeChild(link);
}