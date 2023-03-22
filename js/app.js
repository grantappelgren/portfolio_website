const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var brandingMarketing = document.getElementById("branding-marketing");
var informationDesign = document.getElementById("information-design");
var brandingMarketingButton = document.getElementById("button-one");
var informationDesignButton = document.getElementById("button-two");

window.onload = function() {
	showBrandingAndMarketing();
	buttonOne();
	buttonTwo();
};

function showBrandingAndMarketing() {
	if (brandingMarketing.style.display == "none" && informationDesign.style.display == "block") {
		brandingMarketing.style.display = "block";
		informationDesign.style.display = "none";
	} else {
		brandingMarketing.style.display = "block";
		informationDesign.style.display = "none";
	}
	informationDesignButton.addEventListener("mouseenter", function(hover) {
		hover.target.style.textDecoration = "underline"});
	informationDesignButton.addEventListener("mouseleave", function(hover) {
		hover.target.style.textDecoration = "none"});
	brandingMarketingButton.addEventListener("mouseenter", function(hover) {
		hover.target.style.textDecoration = "none"});
	brandingMarketingButton.style.color = "rgba(212,138,122,1)";
	informationDesignButton.style.color = "rgba(17,28,44,1)";
}

function showInformationDesign() {
	if (brandingMarketing.style.display == "block" && informationDesign.style.display == "none") {
		brandingMarketing.style.display = "none";
		informationDesign.style.display = "block";
	} else {
		brandingMarketing.style.display = "none";
		informationDesign.style.display = "block";
	}
	brandingMarketingButton.addEventListener("mouseenter", function(hover) {
		hover.target.style.textDecoration = "underline"});
	brandingMarketingButton.addEventListener("mouseleave", function(hover) {
		hover.target.style.textDecoration = "none"});
	informationDesignButton.addEventListener("mouseenter", function(hover) {
		hover.target.style.textDecoration = "none"});
	brandingMarketingButton.style.color = "rgba(17,28,44,1)";
	informationDesignButton.style.color = "rgba(212,138,122,1)";
}

function buttonOne() {
	brandingMarketingButton.addEventListener("click", showBrandingAndMarketing);
}

function buttonTwo() {
	informationDesignButton.addEventListener("click", showInformationDesign);
}
