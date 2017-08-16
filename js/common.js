{
    document.title = 'jhealth ver0.0.1';
}

function loadHeaderFooterSidebar(loadContentsCallback){
    $("header").load("subhtml/header.html", function(){
        $("#wtSidebar").load("subhtml/sidebar.html", function(){
            loadContentsCallback();
        });
    });
}
