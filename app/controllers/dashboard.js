const currentYear = require('../../../config/year.js');

// Include jquery as $
const $ = require('jquery')

$(document).ready(() =>{

    console.log(name)

    $("#main-list-group > a").on("click", () => {
        // Remove the current active link
        $("#main-list-group > .active").removeClass("active");
    }

    // functions to define button click actions for tools
    $("#tool1").on("click", () =>{
        // Set tool 1 as the active link
        $("#tool1").addClass("active");
    });
    $("#tool2").on("click", () =>{
        // Set tool 1 as the active link
        $("#tool2").addClass("active");
    });
    $("#tool3").on("click", () =>{
        // Set tool 1 as the active link
        $("#tool3").addClass("active");
    });
    $("#tool4").on("click", () =>{
        // Set tool 1 as the active link
        $("#tool4").addClass("active");
    });
    $("#tool5").on("click", () =>{
        // Set tool 1 as the active link
        $("#tool5").addClass("active");
    });


    console.log(currentYear);

    $("#year-display").text(currentYear);
});
