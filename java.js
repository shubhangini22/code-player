function updateOutput() {
                
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    //updating output -- inline html 
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    //for running javascript code in iframe of output section
    
    
}

$(".toggleButton").hover(function() {
    
    $(this).addClass("highlightedButton");
    
}, function() {
    
    $(this).removeClass("highlightedButton");
    //hover function (hover documentation)
});

$(".toggleButton").click(function() {
    
    $(this).toggleClass("active");
    
    $(this).removeClass("highlightedButton");
    
    var panelId = $(this).attr("id") + "Panel";
    
    $("#" + panelId).toggleClass("hidden");
    
    var numberOfActivePanels = 4 - $('.hidden').length;
    //for dividing the panels into equal length in our code
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
   //toggle class documentation 
})

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {
    //this function will trigger the output section as soon as we write the code
    updateOutput();
    
    
});