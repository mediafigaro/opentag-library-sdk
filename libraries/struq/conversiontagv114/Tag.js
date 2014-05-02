//:include tagsdk-current.js
var version = "";
var classPath = "struq.conversiontagv114" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag v1.14",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Struq Conversion Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "ordertotal",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "orderid",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Products",
			description: "",
			token: "products",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

			var productArr = [];
			for (var i = 0, ii = this.valueForToken("products").length; i < ii; i++) {
				productArr.push(this.valueForToken("products")[i]);
			}
			var productStr = productArr.join(",");

			window._struqPI = window._struqPI || [];
			window._struqPI.push(['injectTrackingPixel', {
				trackingPixelId: '' + this.valueForToken("pixelid"),
				route: '/s/cda/',
				collectData: false,
				data: [{
					title: "li",
					pid: productStr,
					qty: "1",
					tv: "1"
				}, {
					title: "summary",
					oid: "" + this.valueForToken("orderid"),
					tot: "" + this.valueForToken("ordertotal"),
					dis: "0",
					cur: ""
				}],
				options: {
					timeoutMs: 2000,
					firstPartyDomain: '',
					firstPartyCookie: '',
					firstPartyUid: ''
				}
			}]);

			var struq = document.createElement('script');
			struq.type = 'text/javascript';
			struq.async = true;
			struq.src = ('https:' == document.location.protocol ? 'https://' :
				'http://') +
				'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';
			document.getElementsByTagName('head')[0].appendChild(struq);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});