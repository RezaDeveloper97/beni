/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.height = 400;
    config.language = "fa";
    //config.filebrowserImageBrowseUrl = '/filemanager?type=Images';
   // config.filebrowserImageUploadUrl = '/filemanager/upload?type=Images&_token={{csrf_token()}}';
    config.filebrowserBrowseUrl = '/filemanager/ckeditor';
    config.allowedContent=true;
    //config.filebrowserUploadUrl = '/filemanager/upload?type=Files&_token={{csrf_token()}}';
};