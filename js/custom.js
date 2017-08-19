// A simple plugin to enable bootstrap dropdowns to active on hover and provide a nice user experience.
(function (e, t, n) {
	var r = e();
	e.fn.dropdownHover = function (n) {
		r = r.add(this.parent());
		return this.each(function () {
			var n = e(this).parent(),
				i = {
					delay: 500,
					instantlyCloseOthers: !0
				},
				s = {
					delay: e(this).data("delay"),
					instantlyCloseOthers: e(this).data("close-others")
				},
				o = e.extend(!0, {}, i, o, s),
				u;
			n.hover(function () {
				o.instantlyCloseOthers === !0 && r.removeClass("open");
				t.clearTimeout(u);
				e(this).addClass("open")
			}, function () {
				u = t.setTimeout(function () {
					n.removeClass("open")
				}, o.delay)
			})
		})
	};
	e('[data-hover="dropdown"]').dropdownHover()
})(jQuery, this);

//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});
