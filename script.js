// download resume

const downloadButton = document.getElementById("download-button");
const notAvailableMessage = document.getElementById("not-available-message");

// Check if the file exists at the specified path
// For the sake of this example, we'll simulate a file not being available
const fileExists = true

downloadButton.addEventListener("click", function() {
    if (fileExists) {
        const confirmDownload = confirm("Are you sure to download the file?");
        if (confirmDownload) {
            // Redirect to the file download link
            window.location.href = "https://drive.google.com/file/d/1AfKs-2JVdbdg-8HkydoBdOU9pHCxGOQy/view?usp=sharing";
        }
       
    } else {
        // notAvailableMessage.style.display = "block";
        alert("File not available for download")
    }
});


//project 

