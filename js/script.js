const errorMsgCard = "Enter a valid card number";
const errorMsgCardExpiry = "Enter a valid expiry date";
const errorMsgCardCvv = "Enter valid cvv";

function focusInputBlur(element) {
  if ($(element).val() == "") {
    $(element)
      .parent()
      .parent()
      .removeClass("active")
      .removeClass("inactive")
      .removeClass("onload-inactive");
  } else {
    $(element).parent().parent().removeClass("active").addClass("inactive");
  }
  $(element).removeAttr("disabled");
}

$(document).ready(function () {
  $("#bankCard, #cardExpiry, #cardCvv").on("input", function () {
    checkFields();
  });

  $(".info-ico").mouseenter(function () {
    $(this).append('<div class="tooltip-arrow"></div>');
  });

  $(".info-ico")
    .mouseleave(function () {
      $(document).find(".tooltip-arrow").remove();
    })
    .mouseleave();

  ///

  $(".form-focus .uk-input").blur(function () {
    focusInputBlur($(this));
  });

  $(".form-focus .uk-input").click(function () {
    $(this).parent().parent().addClass("active");
  });

  $(".form-focus .uk-input").focus(function () {
    $(this).parent().parent().addClass("active");
  });

  $(".form-focus .uk-input").each(function () {
    if ($(this).val() != "") {
      focusInputBlur($(this));
      $(this).parent().parent().addClass("onload-inactive");
    }
  });
});
