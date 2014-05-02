//:include tagsdk-current.js
var version = "";
var classPath = "visualdna.emailsync" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Email Sync",
		async: true,
		description: "The tag should fire on any successful login or registration of a user with a known email address. The tag must have a dependency on the Visual DNA Page View report tag. The \"Double Hashed Email\" parameter value should be generated using a JS expression as follows : Step 1 : Get user email (e.g.  JoeBloggs@gmaiL.com ). Step 2 : transform it to all lower-case (e.g.   joebloggs@gmail.com ). Step 3 : Trim whitespace form both ends (e.g. joebloggs@gmail.com). Step 4: Hash it with MD5 (e.g. 0db072c4aa5b6b7ae122141364e4891b). Step 5 :  Prepend partner­ specific secret salt to hashed email (e.g. NiOfwog~OpyofbowgOthNawbakpadViojvakC\nhohykomOsokMidIfpiewgheObRu0db072c4aa\n5b6b7ae122141364e4891b). Step 6:  Hash with MD5 again and return value (e.g. c6ead991217ab672145b3c692ced3164).",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Double Hashed User Email",
			description: "Please read tag description for more details",
			token: "email",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["sync", {
				"partner_user_id": "" + this.valueForToken("email"),
				"partner_user_id_type": "e"
			}]
		});
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