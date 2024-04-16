function initListeners() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;
        loadContent(btnID);
    } );
}

function loadContent(pageName) {
    $.get(`pages/${pageName}.html`, (data) =>{
        $("#app").html(data);
    }).fail(function (error) {
        alert("Page is not " + error.statusText)
    });
    

}

function testButton(pageName) {
    loadContent(pageName);
}
 
$(document).ready(function () {
loadContent("home")
initListeners();
});