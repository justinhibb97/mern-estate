const BASE_URL = 'https://real-estate-um7j.onrender.com'

const URLS = {
    LANDING_PAGE: `${BASE_URL}/`,
    SEARCH_PAGE: `${BASE_URL}/search`,
    ABOUT_PAGE: `${BASE_URL}/about`,
    SIGNIN_PAGE: `${BASE_URL}/sign-in`,
    SIGNUP_PAGE: `${BASE_URL}/sign-up`,
    PROFILE_PAGE: `${BASE_URL}/profile`,
    CREATELISTING_PAGE: `${BASE_URL}/create-listing`,
};

const APIS = {
    SIGNIN_ROUTE: `${BASE_URL}/api/auth/signin`,
    SIGNOUT_ROUTE: `${BASE_URL}/api/auth/signout`,
    LISTINGALL_ROUTE: `${BASE_URL}/api/listing/get?`,
    LISTINGSPECIFIC_ROUTE: `${BASE_URL}/api/listing/get?searchTerm=test`,
};

module.exports = { URLS, APIS};
