import $ from "jquery";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/datepicker";

export default function FulfillmentDatepicker() {
  var daysAvailable = searchStringInArray(
    "/",
    jsContext.fulfillmentAvailability
  );
  var categoryDateMapping = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // loop through categories and create a list of dates that the product is not available
  var unavailable = categoryDateMapping.map((day, index) => {
    if (daysAvailable.indexOf(day) == -1) {
      return index;
    } else {
      return false;
    }
  });

  // parse category strings
  function searchStringInArray(str, strArray) {
    var catArr = [];
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j].match(str)) {
        var split = strArray[j].split("/");
        catArr.push(split[1]);
      }
    }
    return catArr;
  }

  // called from datepicker - loops through calendar dates and disable unavailable dates
  function handleAvailability(date) {
    if (daysAvailable.indexOf("Everyday") > -1 && date.getDay() !== 0) {
      return [true, "", ""];
    }
    if (unavailable.indexOf(date.getDay()) > -1) {
      return [false, "unavailable", "Unavailable for fulfillment this day"];
    } else {
      return [true, "", ""];
    }
  }

  if (
    document.querySelector('div[data-product-option-change] input[type="text"]')
  ) {
    $('div[data-product-option-change] input[type="text"]').datepicker({
      beforeShowDay: handleAvailability,
      minDate: +1,
      maxDate: "+6m",
      dateFormat: "DD, MM d",
    });

    // create and append calendar icon
    if (document.querySelector("input.hasDatepicker")) {
      var insertRef = document.querySelector("input.hasDatepicker");
      insertRef.insertAdjacentHTML(
        "beforebegin",
        "<div class='calendar-icon'><div>"
      );
    }
  }
}
