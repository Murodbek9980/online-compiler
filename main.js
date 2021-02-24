var e = ace.edit('myEditor');
e.getSession().setMode("ace/mode/html");
e.setTheme("ace/theme/xcode");
e.setValue("<!DOCTYPE html>\n<html>\n   <head>\n   </head>\n   <body>\n        <p>Hi Freds</p>\n   </body>\n</html>");

$(document).ready(function () {

    $(document).on('click', "#run", function () {
        var code = e.getValue();
        $("#output").html(code);
    })
    $(document).on("click", "#clear", function () {
        e.setValue("");
    })
});


// $(document).ready(function(){
//     //   $("button").click(function(){
//     //     $("pic").attr("width", "500");
//     //   });
//     $('.ace_begin')
//     });
$(document).ready(function () {
    

    $(document).on('click', '#night', function checkBackround(){
        var heroColor = document.getElementById('hero');
        var codeColor = document.getElementById('myEditor');
        heroColor.style.background = "rgba(0, 0, 0, 0.7)";
        codeColor.style.background = "rgba(0, 0, 0, 0.5)";
        codeColor.style.color = "#ffffff";
        $('.ace_begin').attr('color', "88ccbb");

        $('.ace_doctype').attr("color", "999999");

        $(".ace_doctype").css({"color": "999999"});

    });

});
// function checkBackround(){
//     var heroColor = document.getElementById('hero');
//     var codeColor = document.getElementById('myEditor');
//     var textBool = true;
//  if(hero.style.background == "#121212"){
//     hero.style.background = "#ffffff";
//     hero_code.style.background = "#ffffff"
//     hero_code.style.color = "#121212";
//  }
//  else{
//     hero.style.background = "#121212";
//     hero_code.style.background = "#121212";
//     hero_code.style.color = "#ffffff";
//  }

// if(hero.style.background == "#fff")
    // heroColor.style.background = "rgba(0, 0, 0, 0.7)";
    // codeColor.style.background = "rgba(0, 0, 0, 0.5)";
    // codeColor.style.color = "#ffffff";
    // $('.ace_begin').attr("color", "green");
// }