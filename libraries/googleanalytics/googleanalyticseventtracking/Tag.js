//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticseventtracking.Tag", {
    config: {/*DATA*/
	id: 34658,
	name: "Google Analytics Event Tracking",
	async: true,
	description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33665,
		name: "Event Category",
		description: "Required. The name you supply for the group of objects you want to track.",
		token: "category",
		uv: ""
	},
	{
		id: 33666,
		name: "Event Action",
		description: "Required. A string paired with each category. Used to define the type of interaction.",
		token: "action",
		uv: ""
	},
	{
		id: 33667,
		name: "Event Label",
		description: "An optional string to provide additional dimensions to the event data.",
		token: "label",
		uv: ""
	},
	{
		id: 33668,
		name: "Event Value",
		description: "An integer that you can use to provide numerical data about the user event.",
		token: "value",
		uv: ""
	},
	{
		id: 33669,
		name: "Event Non Interaction",
		description: "A boolean that when set to true, the event hit will not be used in bounce-rate calculation.",
		token: "non_interaction",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  window._gaq = window._gaq || [];
  window._gaq.push(['_trackEvent', '' + this.getValueForToken("category") + '', '' + this.getValueForToken("action") + '', '' + this.getValueForToken("label") + '', this.getValueForToken("value"), this.getValueForToken("non_interaction")]);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});