/**
 * Cookie Notice JS
 * @author Alessandro Benoit
 */
(function () {

    "use strict";

    /**
     * Store current instance
     */
    var instance,
        originPaddingTop;

    /**
     * Defaults values
     * @type object
     */
    var defaults = {
        messageLocales: {
            en: 'This website uses cookies to provide you with an improved user experience. By continuing to browse this site, you consent to the use of cookies and similar technologies. Please visit our <a href="/about/privacy-policy">privacy policy</a> for further details.',
            fr: 'Nous utilisons des cookies afin d\'être sûr que vous pouvez avoir la meilleure expérience sur notre site. Si vous continuez à utiliser ce site, nous supposons que vous acceptez l\'utilisation de cookies et technologies similaires. Visitez notre <a href="/about/privacy-policy">politique de confidentialité</a> pour des informations additionelles.'
        },

        cookieNoticePosition: 'bottom',

        learnMoreLinkEnabled: false,

        learnMoreLinkHref: '/cookie-banner-information.html',

        learnMoreLinkText: {
            en: 'Learn more',
            fr: 'En savoir plus'
        },

        buttonLocales: {
            en: 'OK',
338 lines yanked                                                                                              1,1           Top
