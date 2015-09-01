//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"responsys.riconversiontrackingdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "RI Conversion Tracking [DEPRECATED]",
			async: true,
			description: "Conversion Tracking allows you to evaluate how affective your email campaign is in driving a particular \npost-clickthrough action (such as making a purchase). With this feature you can monitor and report on \nthe success of a campaign (with link-tracking enabled) based on its resulting conversions.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "List of Purchased Items",
				description: "array of purchased items",
				token: "purchased_items_array",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Order ID",
				description: "Order ID",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "Order Total",
				token: "order_total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Customer ID",
				description: "Usually their email - If customer ID is not available on the page then set its value to 0",
				token: "customer_id",
				uv: "universal_variable.user.email"
			}, {
				name: "Client RI ID",
				description: "a 47 (approx.) character string provided by Responsys",
				token: "client_ri",
				uv: ""
			}, {
				name: "Conversion Type",
				description: "Type of Conversion, e.g. \"purchase\", \"quote\", etc.",
				token: "type",
				uv: ""
			}, {
				name: "Client EI ID",
				description: "a 23 (approx.) character string provided by Responsys",
				token: "client_ei",
				uv: ""
			}, {
				name: "Domain",
				description: "e.g. email.somedomain.net",
				token: "domain",
				uv: ""
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			var customerID = "" + this.valueForToken("customer_id");
			var numberOfItems = this.valueForToken("purchased_items_array").length;

			var imageSource = document.location.protocol + "//" +
				this.valueForToken("domain") + "/pub/cct?_ri_=" +
				this.valueForToken("client_ri") + "&_ei_=" +
				this.valueForToken("client_ei") + "&action=once&OrderID=" +
				this.valueForToken("order_id") + "&OrderTotal=" +
				this.valueForToken("order_total") + "&numItems=" + numberOfItems;

			if (customerID !== "0") {
				imageSource += "&customerID=" + customerID;
			}

			imageSource += "&Type=" + this.valueForToken("type");

			var image = document.createElement('img');
			image.src = imageSource;
			image.width = 1;
			image.height = 1;

			document.head.appendChild(image);
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