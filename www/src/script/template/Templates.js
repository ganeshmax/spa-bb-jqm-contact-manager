this["JST"] = this["JST"] || {};

this["JST"]["ContactEntryPage/ContactEntryPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="header" data-id="header"  data-role="header" data-position="fixed"  data-tap-toggle="false">\n    <h1>Add Contact</h1>\n\n    <a id="btnCancelContact" href="#" class="ui-btn-left"\n       data-role="button" data-icon="delete"\n       data-iconpos="left" data-theme="c">Cancel</a>\n\n    <a id="btnSaveContact" href="#" class="ui-btn-right hide"\n       data-role="button" data-icon="plus"\n       data-iconpos="left" data-theme="b">Save</a>\n    <a id="btnEditContact" href="#" class="ui-btn-right"\n       data-role="button" data-icon="edit"\n       data-iconpos="left" data-theme="b">Edit</a>\n\n</div>\n\n<div data-role="content" class="z-wrapper">\n\n    <div class="z-scroller">\n\n        <p>\n            <a href="#List1Page" data-btn-type="generic" data-role="button">Goto Page 1</a>\n            <a href="#List2Page" data-btn-type="generic" data-role="button">Goto Page 2</a>\n        </p>\n\n        <div class="z-content">\n            <p>\n                Add contact form here...\n            </p>\n        </div>\n\n    </div>\n</div>\n\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\n    <div data-role="navbar" class="nav-glyphish">\n        <ul>\n            <li><a href="#ContactListPage" id="menuContacts"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   class="ui-btn-active">Contacts</a></li>\n            <li><a href="#List1Page" id="menuGroups"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Groups</a></li>\n            <li><a href="#List2Page" id="menuFavorites"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                    >Favorites</a></li>\n            <li><a href="#SettingsPage" id="menuSettings"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Settings</a></li>\n        </ul>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["ContactListPage/ContactListItem.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#List1Page" data-btn-type="generic">' +
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
__p += '\n<div id="header" data-id="header" data-position="fixed" data-role="header" data-tap-toggle="false">\n    <h1>Contacts</h1>\n    <a id="btnAddContact" href="#" class="ui-btn-right"\n       data-role="button" data-icon="plus"\n       data-iconpos="notext" data-theme="b">Add</a>\n\n</div>\n\n<div data-role="content" class="z-wrapper">\n\n    <div class="z-scroller">\n        <p>\n            <a href="#List1Page" data-btn-type="generic" data-role="button">Goto Page 1</a>\n            <a href="#List2Page" data-btn-type="generic" data-role="button">Goto Page 2</a>\n        </p>\n\n        <div class="z-content">\n            <!-- Page content goes here -->\n        </div>\n    </div>\n\n</div>\n\n<div id="footer" data-id="footer" data-position="fixed" data-role="footer" data-tap-toggle="false">\n    <div data-role="navbar" class="nav-glyphish">\n        <ul>\n            <li><a href="#ContactListPage" id="menuContacts"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   class="ui-btn-active">Contacts</a></li>\n            <li><a href="#List1Page" id="menuGroups"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Groups</a></li>\n            <li><a href="#List2Page" id="menuFavorites"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Favorites</a></li>\n            <li><a href="#SettingsPage" id="menuSettings"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Settings</a></li>\n        </ul>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["SettingsPage/SettingsPage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="header" data-id="header"   data-role="header" data-position="fixed"  data-tap-toggle="false">\n    <h1>Settings</h1>\n\n    <a id="btnSaveContact" href="#" class="ui-btn-right hide"\n       data-role="button" data-icon="plus"\n       data-iconpos="left" data-theme="b">Save</a>\n\n</div>\n\n<div data-role="content" class="z-wrapper">\n    <div class="z-scroller">\n        <div class="z-content">\n            <p>\n                Settings content goes here\n            </p>\n        </div>\n    </div>\n</div>\n\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\n    <div data-role="navbar" class="nav-glyphish">\n        <ul>\n            <li><a href="#ContactListPage" id="menuContacts"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Contacts</a></li>\n            <li><a href="#List1Page" id="menuGroups"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Groups</a></li>\n            <li><a href="#List2Page" id="menuFavorites"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Favorites</a></li>\n            <li><a href="#SettingsPage" id="menuSettings"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   class="ui-btn-active">Settings</a></li>\n        </ul>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["TestPage/Form1Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="header" data-id="header"   data-role="header" data-position="fixed"  data-tap-toggle="false">\n    <h1>Contacts</h1>\n</div>\n\n<div data-role="content" class="z-wrapper">\n\n    <div class="z-scroller">\n\n        <div class="z-content">\n            <div data-role="fieldcontainer">\n                <label for="firstName">First Name:</label>\n                <input type="text" id="firstName" name="firstName">\n            </div>\n\n            <div data-role="fieldcontainer">\n                <label for="lastName">Last Name:</label>\n                <input type="text" id="lastName" name="lastName">\n\n                <label for="description">Description:</label>\n                <textarea id="description" name="description"></textarea>\n            </div>\n\n            <div data-role="fieldcontainer">\n                <label for="birth">Your Birthdate:</label>\n                <input type="date" id="birth" name="birth">\n                <label for="favmonth">Your favorite month:</label>\n                <input type="month" id="favmonth" name="favmonth">\n            </div>\n\n            <button>Save</button>\n        </div>\n\n    </div>\n\n</div>\n\n\n';

}
return __p
};

this["JST"]["TestPage/List1Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n    <div id="header" data-id="header"   data-role="header" data-position="fixed"  data-tap-toggle="false">\n        <h1>Contacts</h1>\n    </div>\n\n    <div data-role="content" class="z-wrapper">\n\n        <div class="z-scroller">\n\n            <p>\n                <a href="#List2Page" data-btn-type="generic" data-role="button">Goto Page 2</a>\n                <a href="#ContactListPage" data-btn-type="generic" data-role="button">Goto Contact List Page</a>\n            </p>\n\n            <div class="z-content">\n                <ul data-role="listview" data-inset="true">\n                    <li data-role="list-divider">Group 1</li>\n                    <li><a href="#">List Item 1</a></li>\n                    <li>\n                        <a href="#Form1Page" data-btn-type="generic">Form 1 Page</a>\n                        <a href="#"></a>\n                    </li>\n\n                    <li><a href="#">List Item 4</a></li>\n\n                    <li>\n                        <a href="#">\n                            <h1>List Item 5</h1>\n                        </a>\n                    </li>\n\n                    <li><a href="#">List Item 6</a></li>\n                    <li data-role="list-divider">Group 2</li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li>\n                        <a href="#"><p>List Item 8</p></a>\n                    </li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li data-role="list-divider">Group 3</li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                    <li><a href="#">List Item 8</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\n        <div data-role="navbar" class="nav-glyphish">\n            <ul>\n                <li><a href="#ContactListPage" id="menuContacts"\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                       >Contacts</a></li>\n                <li><a href="#List1Page" id="menuGroups"\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                       class="ui-btn-active">Groups</a></li>\n                <li><a href="#List2Page" id="menuFavorites"\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                       >Favorites</a></li>\n                <li><a href="#SettingsPage" id="menuSettings"\n                       data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                       >Settings</a></li>\n            </ul>\n        </div>\n    </div>\n\n';

}
return __p
};

this["JST"]["TestPage/List2Page.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="header" data-id="header"   data-role="header" data-position="fixed"  data-tap-toggle="false">\n    <h1>Contacts</h1>\n</div>\n\n<div data-role="content" class="z-wrapper">\n\n    <div class="z-scroller">\n        <p>\n            <a href="#List1Page" data-btn-type="generic" data-role="button">Goto Page 1</a>\n            <a href="#ContactListPage" data-btn-type="generic" data-role="button">Goto Contact List Page</a>\n        </p>\n\n        <div class="z-content">\n            <ul data-role="listview" data-inset="true">\n                <li><a href="#">List Item 11</a></li>\n                <li>List Item 22</li>\n                <li><a href="#">List Item 33</a></li>\n                <li>List Item 44</li>\n                <li><a href="#">List Item 55</a></li>\n                <li>List Item 66</li>\n                <li><a href="#">List Item 77</a></li>\n                <li>List Item 88</li>\n                <li><a href="#">List Item 77</a></li>\n                <li>List Item 88</li>\n                <li><a href="#">List Item 77</a></li>\n                <li>List Item 88</li>\n                <li><a href="#">List Item 77</a></li>\n                <li>List Item 88</li>\n            </ul>\n        </div>\n    </div>\n\n</div>\n\n<div id="footer" data-id="footer" data-role="footer" data-position="fixed"  data-tap-toggle="false">\n    <div data-role="navbar" class="nav-glyphish">\n        <ul>\n            <li><a href="#ContactListPage" id="menuContacts"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                    >Contacts</a></li>\n            <li><a href="#List1Page" id="menuGroups"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   >Groups</a></li>\n            <li><a href="#List2Page" id="menuFavorites"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                   class="ui-btn-active">Favorites</a></li>\n            <li><a href="#SettingsPage" id="menuSettings"\n                   data-transition=\'none\' data-btn-type="generic" data-icon="custom"\n                    >Settings</a></li>\n        </ul>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["temp/AppContent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="content">\n    <p>This is the first content that is going to be displayed on this web page. Let\'s see how it renders.</p>\n    <p>While we are at it, why not another paragraph to see how two paragraphs work out together</p>\n    <a href="#List2Page">Goto Page2</a>\n    <p></p>\n\n    <form id="frmOne" name="frmOne" action="index1.html" method="get" data-transition="pop">\n        <label for="company">Company Name:</label>\n        <input type="text" id="company">\n    </form>\n\n</div>';

}
return __p
};

this["JST"]["temp/AppFooter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="footer">\n    <h1>Contact Manager</h1>\n</div>';

}
return __p
};

this["JST"]["temp/AppHeader.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="header" data-position="fixed"  data-tap-toggle="false">\n    <h1>Contacts</h1>\n</div>';

}
return __p
};