$(document).ready(function() {
    $(function() {
        $("#registerform").progression({
            tooltipWidth: '200',
            tooltipPosition: 'right',
            tooltipOffset: '0',
            showProgressBar: false,
            showHelper: true,
            tooltipFontSize: '14',
            tooltipFontColor: 'fff',
            progressBarBackground: 'fff',
            progressBarColor: '7ea2de',
            tooltipBackgroundColor: 'a5bce5',
            tooltipPadding: '7',
            tooltipAnimate: true
        }).submit(function(e) {
            e.preventDefault();
        });

        $('#username').on('blur', function() {
            var currval = $(this).val();

            if (currval.length < 6) {
                $(this).next('.errmsg').slideDown();
            } else {

                $(this).next('.errmsg').slideUp();
            }
        });

        $('#email1').on('blur', function() {

            var mailval = $(this).val();

            var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
            if (!pattern.test(mailval)) {
                $(this).next('.errmsg').slideDown();
            } else {
                $(this).next('.errmsg').slideUp();
            }
        });

        $('#password2').on('blur', function() {
            var pwone = $('#password1').val();
            var pwtwo = $(this).val();

            if (pwtwo.length < 1 || pwone != pwtwo) {
                $(this).next('.errmsg').slideDown();
            } else if (pwone == pwtwo) {

                $(this).next('.errmsg').slideUp();
            }
        });
    });
    (function(e, t, n, r) {
        function o(t, n) {
            this.element = t;
            this.$elem = e(this.element);
            this.options = e.extend({}, s, n);
            this._defaults = s;
            this._name = i;
            this.init()
        }
        var i = "progression",
            s = {
                tooltipWidth: "200",
                tooltipPosition: "right",
                tooltipOffset: "50",
                showProgressBar: true,
                showHelper: true,
                validator: false,
                tooltipFontSize: "14",
                tooltipFontColor: "ffffff",
                progressBarBackground: "ffffff",
                progressBarColor: "6EA5E1",
                tooltipBackgroundColor: "a2cbfa",
                tooltipPadding: "10",
                tooltipAnimate: true
            };
        o.prototype = {
            init: function() {
                function t(e, t) {
                    return t / e * 100
                }
                data_prog = this.$elem.css("position", "relative").find("[data-progression]");
                items = data_prog.length;
                thisid = this.$elem.attr("id");
                firstoffset = data_prog.first().position().top;
                firsthelper = data_prog.first().attr("data-helper");
                if (data_prog.first().attr("data-helper") !== r) {
                    firsthelper = data_prog.first().attr("data-helper")
                } else {
                    firsthelper = ""
                }
                if (this.options.showProgressBar === false) {
                    $display = "display:none;"
                } else {
                    $display = ""
                }
                if (this.options.showHelper === false) {
                    $display2 = "display:none;"
                } else {
                    $display2 = ""
                }
                var n = this.options.tooltipAnimate ? "-webkit-transition: top .3s ease-in-out;-moz-transition: top .3s ease-in-out;-o-transition: top .3s ease-in-out;transition: top .3s ease-in-out;" : "";
                var i = this.options.tooltipAnimate ? "-webkit-transition: width .3s ease-in-out;-moz-transition: width .3s ease-in-out;-o-transition: width .3s ease-in-out;transition: width .3s ease-in-out;" : "";
                var s = this.options.tooltipPosition == "right" ? "border-color: transparent #" + this.options.tooltipBackgroundColor + " transparent transparent;" : "border-color: transparent transparent transparent #" + this.options.tooltipBackgroundColor + "";
                marginRight = parseInt(this.options.tooltipWidth) + parseInt(this.options.tooltipOffset);
                myhtml = e('<div class="syco_tooltip" data-tooltip="' + thisid + '" style="' + n + "padding:" + this.options.tooltipPadding + "px;top:" + firstoffset + "px;position:absolute;background:#" + this.options.tooltipBackgroundColor + ";" + this.options.tooltipPosition + ":-" + marginRight + "px;width:" + this.options.tooltipWidth + 'px" ><span class="triangle_' + this.options.tooltipPosition + '" style="' + s + '"></span><p style="' + $display2 + "font-size:" + this.options.tooltipFontSize + "px;color:#" + this.options.tooltipFontColor + '"><span class="tooltip_helper"><span data-index="1" >1</span>/' + items + "</span> " + firsthelper + '</p><div class="percentagebar" style="' + $display + "background:#" + this.options.progressBarBackground + '""><div class="percentagebarinner" style="' + i + "background:#" + this.options.progressBarColor + '"></div><span class="percent" ' + $display + ">0%</span></div></div>");
                this.$elem.prepend(myhtml);
                thiswidth = this.$elem.find(".syco_tooltip").width();
                data_prog.each(function() {
                    var n = e(this);
                    var i = n.position().top;
                    n.bind("live focus change", function() {
                        thisprogressionlength = n.parent().parent().find("[data-progression]").length;
                        alldataprogression = n.parent().parent().find("[data-progression]");
                        thisid2 = n.parent().parent().attr("id");
                        thistooltip = e('[data-tooltip="' + thisid2 + '"]');
                        thishelper = n.attr("data-helper");
                        if (n.attr("data-helper") !== r) {
                            thishelper = n.attr("data-helper")
                        } else {
                            thishelper = ""
                        }
                        index = parseInt(e("#" + thisid2).find("[data-progression]").index(n)) + 1;
                        percentage = t(thisprogressionlength, index).toFixed(0);
                        thistooltip.find("p").html('<span class="tooltip_helper"><span data-index="1" >' + index + "</span>/" + thisprogressionlength + "</span> " + thishelper).parent().find(".percentagebarinner").css("width", parseInt(percentage) + "%").next().html(parseInt(percentage) + "%");
                        thistooltip.css("top", i + "px")
                    })
                })
            },
            yourOtherFunction: function(e, t) {}
        };
        e.fn[i] = function(t) {
            return this.each(function() {
                if (!e.data(this, "plugin_" + i)) {
                    e.data(this, "plugin_" + i, new o(this, t))
                }
            })
        }
    })(jQuery, window, document)


});