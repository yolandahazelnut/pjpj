$(function(){var eraseState,mouseDownState,curColor;if($(".color.selected").length>0){curColor=$(".color.selected").attr("data-color");}$("#clear").click(function(){rows=$("#gridSize").val().split(",")[0];cols=$("#gridSize").val().split(",")[1];buildGrid(rows,cols);});$("#drawing-table tbody").delegate("td","mousedown",function(){mouseDownState=true;$el=$(this);if(eraseState){$el.removeAttr("style");}else{$el.css("background",curColor);}}).delegate("td","mouseenter",function(){if(mouseDownState){$el=$(this);if(eraseState){$el.removeAttr("style");}else{$el.css("background",curColor);}}});$("html").bind("mouseup",function(){mouseDownState=false;});$(document).keydown(function(event){if(event.keyCode==18){eraseState=true;$(".selected").addClass("previous");$(".color").removeClass("selected");$(".eraser").addClass("selected");}}).keyup(function(event){if(event.keyCode==18){eraseState=false;$(".color").removeClass("selected");$(".previous").addClass("selected").removeClass("previous");$("."+ curColor).addClass("selected");}});$("#color-selector").delegate(".color","click",function(){$el=$(this);var pulledVal=$el.attr("data-color");if(pulledVal=='eraser'){eraseState=true;}else{eraseState=false;curColor=pulledVal;}
$(".color").removeClass("selected");$(this).addClass("selected");});$("#tracing-image-form").submit(function(){var url=$("#fileLocation").val();$("<div />",{id:"tracing-image"}).appendTo("#table-wrap");$("#drawing-table").css("opacity",0.5);$("#toggle-tracing-mode").show();$("#tracing-image-form").remove();tracingMode=true;return false;});$("#toggle-tracing-mode").click(function(){if(tracingMode){$("#tracing-image").css("visibility","hidden");$(this).html("Toggle Tracing Mode On");$("#drawing-table").css("opacity",1);tracingMode=false;}else{$("#tracing-image").css("visibility","visible");$(this).html("Toggle Tracing Mode Off");$("#drawing-table").css("opacity",0.5);tracingMode=true;}});$("#get-html-button").click(function(){$("#the-html").val("<table style='width: 100%; border-collapse: collapse;'>"+ $("#drawing-table").html()+"</table>");});});
