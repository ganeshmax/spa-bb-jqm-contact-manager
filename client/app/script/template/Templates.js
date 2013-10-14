this["JST"] = this["JST"] || {};

this["JST"]["ContactEntryPage/ContactEntryPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Add Contact</h1>\r\n\r\n    <a id="btnCancelContact" href="#" class="ui-btn-left"\r\n       data-role="button" data-icon="delete"\r\n       data-iconpos="left" data-theme="c">Cancel</a>\r\n\r\n    <a id="btnSaveContact" href="#" class="ui-btn-right hide"\r\n       data-role="button" data-icon="plus"\r\n       data-iconpos="left" data-theme="b">Save</a>\r\n    <a id="btnEditContact" href="#" class="ui-btn-right"\r\n       data-role="button" data-icon="edit"\r\n       data-iconpos="left" data-theme="b">Edit</a>\r\n\r\n</div>\r\n\r\n<div data-role="content">\r\n    <p>\r\n        <a href="#Page1" data-btn-type="generic" data-role="button">Goto Page 1</a>\r\n        <a href="#Page2" data-btn-type="generic" data-role="button">Goto Page 2</a>\r\n    </p>\r\n    <div class="content">\r\n        <p>\r\n            Add contact form here...\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <div data-role="navbar" class="nav-glyphish">\r\n        <ul>\r\n            <li><a href="#ContactListPage" id="menuContacts"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   class="ui-btn-active">Contacts</a></li>\r\n            <li><a href="#Page1" id="menuGroups"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Groups</a></li>\r\n            <li><a href="#Page2" id="menuFavorites"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                    >Favorites</a></li>\r\n            <li><a href="#SettingsPage" id="menuSettings"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Settings</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["ContactListPage/ContactListItem.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#Page1" data-btn-type="generic">' +
((__t = (name.first)) == null ? '' : __t) +
' ' +
((__t = (name.last)) == null ? '' : __t) +
'</a>';

}
return __p
};

this["JST"]["ContactListPage/ContactListPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n    <a id="btnAddContact" href="#" class="ui-btn-right"\r\n       data-role="button" data-icon="plus"\r\n       data-iconpos="notext" data-theme="b">Add</a>\r\n\r\n</div>\r\n\r\n<div data-role="content">\r\n    <p>\r\n        <a href="#List1Page" data-btn-type="generic" data-role="button">Goto Page 1</a>\r\n        <a href="#List2Page" data-btn-type="generic" data-role="button">Goto Page 2</a>\r\n    </p>\r\n    <div class="content">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <div data-role="navbar" class="nav-glyphish">\r\n        <ul>\r\n            <li><a href="#ContactListPage" id="menuContacts"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   class="ui-btn-active">Contacts</a></li>\r\n            <li><a href="#Page1" id="menuGroups"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Groups</a></li>\r\n            <li><a href="#Page2" id="menuFavorites"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Favorites</a></li>\r\n            <li><a href="#SettingsPage" id="menuSettings"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Settings</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["SettingsPage/SettingsPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Settings</h1>\r\n\r\n    <a id="btnSaveContact" href="#" class="ui-btn-right hide"\r\n       data-role="button" data-icon="plus"\r\n       data-iconpos="left" data-theme="b">Save</a>\r\n\r\n</div>\r\n\r\n<div data-role="content">\r\n    <div class="content">\r\n        <p>\r\n            Settings content goes here\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <div data-role="navbar" class="nav-glyphish">\r\n        <ul>\r\n            <li><a href="#ContactListPage" id="menuContacts"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Contacts</a></li>\r\n            <li><a href="#Page1" id="menuGroups"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Groups</a></li>\r\n            <li><a href="#Page2" id="menuFavorites"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Favorites</a></li>\r\n            <li><a href="#SettingsPage" id="menuSettings"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   class="ui-btn-active">Settings</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["TestPage/Form1Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>\r\n\r\n<div data-role="content">\r\n\r\n    <div class="content">\r\n\r\n        <div data-role="fieldcontainer">\r\n            <label for="firstName">First Name:</label>\r\n            <input type="text" id="firstName" name="firstName">\r\n        </div>\r\n\r\n        <div data-role="fieldcontainer">\r\n            <label for="lastName">Last Name:</label>\r\n            <input type="text" id="lastName" name="lastName">\r\n\r\n            <label for="description">Description:</label>\r\n            <textarea id="description" name="description"></textarea>\r\n        </div>\r\n\r\n        <div data-role="fieldcontainer">\r\n            <label for="birth">Your Birthdate:</label>\r\n            <input type="date" id="birth" name="birth">\r\n            <label for="favmonth">Your favorite month:</label>\r\n            <input type="month" id="favmonth" name="favmonth">\r\n        </div>\r\n\r\n        <button>Save</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n';

}
return __p
};

this["JST"]["TestPage/List1Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n    <div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n        <h1>Contacts</h1>\r\n    </div>\r\n\r\n    <div data-role="content">\r\n\r\n        <p>\r\n            <a href="#List2Page" data-btn-type="generic" data-role="button">Goto Page 2</a>\r\n            <a href="#ContactListPage" data-btn-type="generic" data-role="button">Goto Contact List Page</a>\r\n        </p>\r\n\r\n        <div class="content">\r\n            <ul data-role="listview" data-inset="true">\r\n                <li data-role="list-divider">Group 1</li>\r\n                <li><a href="#">List Item 1</a></li>\r\n                <li>\r\n                    <a href="#Form1Page" data-btn-type="generic">Form 1 Page</a>\r\n                    <a href="#"></a>\r\n                </li>\r\n\r\n                <li><a href="#">List Item 4</a></li>\r\n\r\n                <li>\r\n                    <a href="#">\r\n                        <h1>List Item 5</h1>\r\n                    </a>\r\n                </li>\r\n\r\n                <li><a href="#">List Item 6</a></li>\r\n                <li data-role="list-divider">Group 2</li>\r\n                <li><a href="#">List Item 8</a></li>\r\n                <li>\r\n                    <a href="#"><p>List Item 8</p></a>\r\n                </li>\r\n                <li><a href="#">List Item 8</a></li>\r\n                <li data-role="list-divider">Group 3</li>\r\n                <li><a href="#">List Item 8</a></li>\r\n                <li><a href="#">List Item 8</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n        <div data-role="navbar" class="nav-glyphish">\r\n            <ul>\r\n                <li><a href="#ContactListPage" id="menuContacts"\r\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                       >Contacts</a></li>\r\n                <li><a href="#Page1" id="menuGroups"\r\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                       class="ui-btn-active">Groups</a></li>\r\n                <li><a href="#Page2" id="menuFavorites"\r\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                       >Favorites</a></li>\r\n                <li><a href="#SettingsPage" id="menuSettings"\r\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                       >Settings</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n';

}
return __p
};

this["JST"]["TestPage/List2Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>\r\n\r\n<div data-role="content">\r\n\r\n    <p>\r\n        <a href="#List1Page" data-btn-type="generic" data-role="button">Goto Page 1</a>\r\n        <a href="#ContactListPage" data-btn-type="generic" data-role="button">Goto Contact List Page</a>\r\n    </p>\r\n\r\n    <div class="content">\r\n        <ul data-role="listview" data-inset="true">\r\n            <li><a href="#">List Item 11</a></li>\r\n            <li>List Item 22</li>\r\n            <li><a href="#">List Item 33</a></li>\r\n            <li>List Item 44</li>\r\n            <li><a href="#">List Item 55</a></li>\r\n            <li>List Item 66</li>\r\n            <li><a href="#">List Item 77</a></li>\r\n            <li>List Item 88</li>\r\n            <li><a href="#">List Item 77</a></li>\r\n            <li>List Item 88</li>\r\n            <li><a href="#">List Item 77</a></li>\r\n            <li>List Item 88</li>\r\n            <li><a href="#">List Item 77</a></li>\r\n            <li>List Item 88</li>\r\n        </ul>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\r\n    <div data-role="navbar" class="nav-glyphish">\r\n        <ul>\r\n            <li><a href="#ContactListPage" id="menuContacts"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                    >Contacts</a></li>\r\n            <li><a href="#Page1" id="menuGroups"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   >Groups</a></li>\r\n            <li><a href="#Page2" id="menuFavorites"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                   class="ui-btn-active">Favorites</a></li>\r\n            <li><a href="#SettingsPage" id="menuSettings"\r\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\r\n                    >Settings</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["temp/AppContent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="content">\r\n    <p>This is the first content that is going to be displayed on this web page. Let\'s see how it renders.</p>\r\n    <p>While we are at it, why not another paragraph to see how two paragraphs work out together</p>\r\n    <a href="#page2">Goto Page2</a>\r\n    <p></p>\r\n\r\n    <form id="frmOne" name="frmOne" action="index1.html" method="get" data-transition="pop">\r\n        <label for="company">Company Name:</label>\r\n        <input type="text" id="company">\r\n    </form>\r\n\r\n</div>';

}
return __p
};

this["JST"]["temp/AppFooter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="footer">\r\n    <h1>Contact Manager</h1>\r\n</div>';

}
return __p
};

this["JST"]["temp/AppHeader.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="header" data-position="fixed"  data-tap-toggle="false">\r\n    <h1>Contacts</h1>\r\n</div>';

}
return __p
};