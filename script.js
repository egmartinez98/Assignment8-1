
$(document).ready(function () {
    
    /* step 1
    $("button").click(function () {
        "use strict";
        window.alert("You have clicked button!");
    });*/
    
    /* step 2
    $("button").bind("click", function () {
        window.alert("You have clicked button via .bind");
    })*/
    
   /*step 3
    $("button").on("click", function () {
        window.alert("You have clicked button via .on");
    })*/
    
    /*step 4
    $("button").on("click", function () {
        window.alert("You have clicked button via .on");
    })*/
    
    
    /* step 5
    $("div").css({"width": "400px", "height": "400px", "background": "blue"});
    
    $("body").on({
	click: function(event) {
		window.alert("DIV was clicked!");
	},
        
    mouseenter: function(event) {
		window.alert("DIV was entered!");
	},
    mouseout: function(event) {
		window.alert("DIV was left!");
	}
                
}, "div");*/
    
    /* step 6
    $("div").css({"width": "400px", "height": "400px", "background": "blue"});
    
    $("body").on({
	click: function(event) {
		$("span").text("DIV was clicked");
	},
        
    mouseenter: function(event) {
		$("span").text("DIV was Entered");
	},
    mouseout: function(event) {
		$("span").text("DIV was left");
	}
                
}, "div");*/
    
    
        /*step 7
When the user clicks the link, first, prevent it from redirecting to that web site. Second, programmatically style the link so that its color changes to red. Third, display the name of the node that triggered the event within an alert box.*/
    
    /* 7.1
    $("a").on("click", function (event) {
        event.preventDefault();
    })*/
    
    /* step 7.2
    $("a").on("click", function (event) {
        $("a").css({"color": "red"});
    })*/
    
    /*step 7.3
    $("a").on("click", function (event) {
        window.alert(event.currentTarget.nodeName  + " triggerd the event");
    })*/
    
    /* step 8
    $(window).resize(function() {
	$("div").text($(window).width());
});*/
    
    /* step 9
    $("input").on("focus", function () {
        $("input").css({"background": "lightgrey"});
    })
    
    $("input").on("focusout", function () {
        $("input").css({"background": "white"});
    })*/
    
    
    
    /* step 10
    $("#sub").on("click", function () {
        
        
        if ($("#name").val() === "") {
            $("#name").css({"border": "1px solid red"});
            window.alert("Field is required");
            return false;
        } else if ($("#email").val() === "") {
            $("#email").css({"border": "1px solid red"});
            window.alert("Field is required");
            return false;
        } else if ($("#email").val() !== "") {
            $("#email").css({"border": "1px solid black"});
        } else if ($("#name").val() !== "") {
            $("#name").css({"border": "1px solid black"});
        } else {
            window.alert("congraduations both fields have been succesfully entered");
        }
        
    
    });*/
    
    /*Calculator part 2*/
    
    /*step 2*/
    $("input:button").css({width: "30px", height: "30px", "background": "Purple", "color": "white", "border": "double 4px white"});
    
    $("#result").css({"background": "silver", width: "128px", "border": "3px double black"});
    
    
    
    /*step 3*/
    
    //The Calculator II



//step 7
//Create a user-defined function called calculate() that doesn’t accept any arguments.

   
    window.addEventListener("load", function () {
        "use strict";
        init();
    }, false);



/*step 8
Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.*/


    
    function init() {
        "use strict";
        $("#form").on("click", enter);
        
        $("#equal").on("click", calculate); 
    }
    
    
        function enter(val) {
         //  $("#result").val() += val.target.value;
            document.getElementById("result").value += val.toElement.defaultValue;
        }
        
        function calculate(e) {
            var result = $("#result").val();
            document.getElementById("result").value = eval(result);
            e.stopPropagation();
        }
    
    
});





