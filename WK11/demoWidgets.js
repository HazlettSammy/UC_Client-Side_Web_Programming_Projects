$(document).ready(() => {
	// Alphabet and Email Providers
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	const emailProviders = ["@yahoo.com", "@gmail.com", "@outlook.com", "@hotmail.com"];

	// Datepickers
	$("#datepickerfrom, #datepickerto").datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		numberOfMonths: 1,
		dateFormat: "DD, d MM yy",
		firstDay: 0, // Set Sunday as the first day of the week
		minDate: new Date(),
		maxDate: "+2M",
	});

	// Slider
	$("#slider").slider({
		orientation: "horizontal",
		max: 200,
		min: -50,
		step: 10,
		value: 0,
		slide: () => {
			const value = $("#slider").slider("value");
			$("#sliderVal").text(value);
		},
	});

	// Dialog
	$("#quickView").click(() => {
		$("#name, #email, #password").val("");
		$("#dialog").dialog({
			modal: true,
			width: 350,
			buttons: {
				Close: function () {
					$(this).dialog("close");
				},
				Randomize: function () {
					const randomName = Array.from({ length: 8 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
					const randomEmail = randomName.toLowerCase() + emailProviders[Math.floor(Math.random() * emailProviders.length)];
					const randomPassword = Array.from({ length: 12 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");

					$("#name").val(randomName);
					$("#email").val(randomEmail);
					$("#password").val(randomPassword);
				},
			},
		});
	});

	// Tabs
	$("#tabs").tabs({
		active: 0,
		event: "mouseover",
	});
});
