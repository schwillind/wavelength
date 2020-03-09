const currentYear = require('../../../config/year.js');

// Include jquery as $
const $ = require('jquery')

$(document).ready(() =>{

    console.log(name)

    // functions to define button click actions for tools
    $("#tool1").on("click", () =>{
        // Clear the current active link
        $("#main-list-group > .active").removeClass("active");
        // Set tool 1 as the active link
        $("#main-list-group > #tool1").addClass("active");
    });
    $("#tool2").on("click", () =>{
        // Clear the current active link
        $("#main-list-group > .active").removeClass("active");
        // Set tool 1 as the active link
        $("#main-list-group > #tool1").addClass("active");
    });
    $("#tool3").on("click", () =>{
        // Clear the current active link
        $("#main-list-group > .active").removeClass("active");
        // Set tool 1 as the active link
        $("#main-list-group > #tool1").addClass("active");
    });
    $("#tool4").on("click", () =>{
        // Clear the current active link
        $("#main-list-group > .active").removeClass("active");
        // Set tool 1 as the active link
        $("#main-list-group > #tool1").addClass("active");
    });
    $("#tool5").on("click", () =>{
        // Clear the current active link
        $("#main-list-group > .active").removeClass("active");
        // Set tool 1 as the active link
        $("#main-list-group > #tool1").addClass("active");
    });


    console.log(currentYear);

    $("#year-display").text(currentYear);
});
