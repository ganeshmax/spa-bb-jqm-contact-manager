this["JST"] = this["JST"] || {};

this["JST"]["client/app/script/template/AppContent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="content">\r\n    <p>This is the first content that is going to be displayed on this web page. Let\'s see how it renders.</p>\r\n    <p>While we are at it, why not another paragraph to see how two paragraphs work out together</p>\r\n    <a href="#page2">Goto Page2</a>\r\n    <p></p>\r\n\r\n    <form id="frmOne" name="frmOne" action="index1.html" method="get" data-transition="pop">\r\n        <label for="company">Company Name:</label>\r\n        <input type="text" id="company">\r\n    </form>\r\n\r\n</div>';

}
return __p
};

this["JST"]["client/app/script/template/AppFooter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="footer">\r\n    <h1>Contact Manager</h1>\r\n</div>';

}
return __p
};

this["JST"]["client/app/script/template/AppHeader.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>';

}
return __p
};

this["JST"]["client/app/script/template/ContactListItem.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = (name.first)) == null ? '' : __t) +
' ' +
((__t = (name.last)) == null ? '' : __t);

}
return __p
};

this["JST"]["client/app/script/template/ContactListPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>\r\n\r\n<div data-role="content">\r\n    <ul data-role="listview" data-inset="true">\r\n\r\n    </ul>\r\n</div>\r\n\r\n<div data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contact Manager</h1>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["client/app/script/template/Page1.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n    <div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n        <h1>Contacts</h1>\r\n    </div>\r\n\r\n    <div data-role="content">\r\n        <ul data-role="listview" data-inset="true">\r\n            <li><a href="#">List Item 1</a></li>\r\n            <li><a href="#">List Item 2</a></li>\r\n            <li><a href="#">List Item 3</a></li>\r\n            <li><a href="#">List Item 4</a></li>\r\n            <li><a href="#">List Item 5</a></li>\r\n            <li><a href="#">List Item 6</a></li>\r\n            <li><a href="#">List Item 7</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n            <li><a href="#">List Item 8</a></li>\r\n        </ul>\r\n        <a id="btnGotoPage2" href="#page2">Goto Page2</a>\r\n    </div>\r\n\r\n    <div data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n        <h1>Contact Manager</h1>\r\n    </div>\r\n\r\n';

}
return __p
};

this["JST"]["client/app/script/template/Page2.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>\r\n\r\n<div data-role="content">\r\n\r\n    <ul data-role="listview">\r\n        <li><a href="#">List Item 11</a></li>\r\n        <li>List Item 22</li>\r\n        <li><a href="#">List Item 33</a></li>\r\n        <li>List Item 44</li>\r\n        <li><a href="#">List Item 55</a></li>\r\n        <li>List Item 66</li>\r\n        <li><a href="#">List Item 77</a></li>\r\n        <li>List Item 88</li>\r\n        <li><a href="#">List Item 77</a></li>\r\n        <li>List Item 88</li>\r\n        <li><a href="#">List Item 77</a></li>\r\n        <li>List Item 88</li>\r\n        <li><a href="#">List Item 77</a></li>\r\n        <li>List Item 88</li>\r\n    </ul>\r\n\r\n    <p>\r\n        <a id="btnGotoPage1" href="#page1">Goto Page1</a>\r\n    </p>\r\n</div>\r\n\r\n<div data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contact Manager</h1>\r\n</div>\r\n\r\n';

}
return __p
};