function display(pageId) {
    // Hide all pages
    document.getElementById('devOpsHome').style.display = 'none';
    document.getElementById('devOpsPrep').style.display = 'none';
                
    // Show the requested page
    document.getElementById(pageId).style.display = 'block';
}
         
// Initialize the page to show the home page by default
window.onload = function() {
    display('devOpsHome');
};