function initListeners() {
    $("nav a").on("click", (e) => {
        let btnID = e.currentTarget.id;
        // console.log(pageContent);
        // $("#app").html(eval(pageContent));
        loadContent(btnID);
    } );
}

function loadContent(pageName) {
    // let pageContent = pageName +"Content";
    $.get(`pages/${pageName}.html`, (data) =>{
        // console.log(data);
        $("#app").html(data);
    }).fail(function (error) {
        // console.log("error",error);
        alert("Page is not " + error.statusText)
    });
    

}

function testButton(pageName) {
    loadContent(pageName);
}
 
$(document).ready(function () {
// $("#app").html(homeContent);
loadContent("home")
initListeners();
});