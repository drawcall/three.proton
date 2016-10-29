$(function() {
    $(".show-case > div").on("mouseenter", function() {
        var mask = $(this).find(".mask");
        mask.addClass("trans");
        setTimeout(showInMask, 50, mask);
    });

    $(".show-case .mask").each(function() {
        showOutMask($(this));
    });

    $(".show-case > div").on("mouseleave", function() {
        var mask = $(this).find(".mask");
        showOutMask(mask);
    });

    function showInMask(mask) {
        var ins = "translate(0,0)";
        mask.css({
            "opacity": 1,
            "height": "110%",
            "top": "0",
            "bottom": "auto"
        });

        setTimeout(function(argument) {
            mask.css({
                "height": "0",
                "bottom": "0",
                "top": "auto"
            });
        }, 500);
    }

    function showOutMask(mask) {
        var outs = "translate(0,120px)";
        mask.css({
            "opacity": 1,
            "height": "0%",
            "bottom": "0",
            "top": "auto"
        });
    }
});
