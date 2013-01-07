# Social Profiles and Sharing jQuery Plugin

To list social accounts or share any page with 46 icons.

* Share example: http://tolgaergin.com/files/arthref/social-share.html
* Social profiles: http://tolgaergin.com/files/arthref/social-profiles.html

## Usage

You need to link stylesheet
	<link rel="stylesheet" href="assets/stylesheets/arthref.css">

#### If you use the plugin in order to link to your profiles, you need to load jQuery first then arthrefSocialProfiles.js
	<script src="assets/javascripts/arthrefSocialProfiles.js"></script>

Then initialize the variables

	$('#clickable').arthrefSocialProfiles({
		email: 'example@example.com',
		facebook: 'tolgaergin',
		twitter: 'tolgaergin',
		pinterest: 'tolga',
		dribbble: 'bbb',
		skype: 'tolgaergin.com'
	});

#### If you use the plugin in order to share pages, you need to load jQuery first then arthrefSocialShare.js
	<script src="assets/javascripts/arthrefSocialShare.js"></script>

Then initialize the variables

	$('#clickable').arthrefSocialShare({
		social: 'blogger,delicious,digg,facebook,google,linkedin,myspace,reddit,stumbleupon,tumblr,twitter,windows,yahoo'
	});

## Directory structure

	/assets
		/stylesheets
		/images
		/javascripts

## Authors

**Tolga Ergin**

+ http://twitter.com/tolgaergin
+ http://tolgaergin.com

**Gökhun Güneyhan**

+ http://twitter.com/gokhunguneyhan
+ http://gokhunguneyhan.com
