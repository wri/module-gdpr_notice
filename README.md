# module-gdpr_notice
A Drupal 7 module to display a cookie notice for GDPR compliance. Uses js from https://github.com/AOEpeople/cookie-notice with some customizations. 

Default text and link destination can be customized on the Admin configuration page.

# Non-Drupal Sites
To add the notice to a site manually, put the original unmodified js file from https://github.com/AOEpeople/cookie-notice (cookie.notice.js) somewhere accessible and then include the following in the ```<head>``` section of your pages:
  
```
<script type="text/javscript" src="path/to/the/file/cookie.notice.js"></script>
```

*be sure to grab the unmodified script from https://github.com/AOEpeople/cookie-notice - the version in this repo has been modified to work with the Drupal module*


# screenshot

![screenshot from 2019-01-10 09-51-46](https://user-images.githubusercontent.com/1031373/50976289-999ba680-14bd-11e9-98a9-30446f0506f4.png)
