(function() {
    tinymce.create('tinymce.plugins.simplegrid', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
		init : function(ed, url) {
	        ed.addButton('simplegrid', {
	            title : 'SimpleGrid',
	            type: 'menubutton',
	            cmd : 'simplegrid',
	            icon: false,
	            text: 'SimpleGrid',
	            menu: [
	            	{
	            		text: 'Grid Section',
	            		onclick: function() {
	            			ed.insertContent( '[simplegrid_wrapper]ENTER ALL SIMPLE GRID SHORTCODES HERE[/simplegrid_wrapper]');
	            		}
	            	},
	                {
	                    text: 'Col 1/1',
	                 	onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/1 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''}
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-1"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 2/3',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 2/3 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-1"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/2',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/2 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-2"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/3',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/3 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-3"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/4',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/4 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-4"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/5',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/5 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-5"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/6',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/6 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-6"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/7',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/7 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-7"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/8',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/8 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-8"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/9',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/9 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-9"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/10',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/10 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-10"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/11',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/11 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-11"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	                {
	                    text: 'Col 1/12',
	                    onclick: function() {
						    ed.windowManager.open( {
						        title: 'Col 1/12 Options',
						        width: 350,
						        height: 250,
						        body: [{
						            type: 'listbox',
						            name: 'mobilegrid',
						            label: 'Mobile Grid',
						            'values': [
						            	{text: 'none', value: ''},
						            	{text: 'mobile-col-2-3', value: 'mobile="2-3"'},
						                {text: 'mobile-col-1-2', value: 'mobile="1-2"'},
						                {text: 'mobile-col-1-3', value: 'mobile="1-3"'},
						                {text: 'mobile-col-1-4', value: 'mobile="1-4"'},
						                {text: 'mobile-col-1-5', value: 'mobile="1-5"'},
						                {text: 'mobile-col-1-6', value: 'mobile="1-6"'},
						                {text: 'mobile-col-1-7', value: 'mobile="1-7"'},
						                {text: 'mobile-col-1-8', value: 'mobile="1-8"'},
						                {text: 'mobile-col-1-9', value: 'mobile="1-9"'},
						                {text: 'mobile-col-1-10', value: 'mobile="1-10"'},
						                {text: 'mobile-col-1-11', value: 'mobile="1-11"'},
						                {text: 'mobile-col-1-12', value: 'mobile="1-12"'},
						            ]
						        },
						        {
						            type: 'listbox',
						            name: 'pushgrid',
						            label: 'Push Grid',
						            'values': [
						            	{text: 'none', value: ''},
						                {text: 'push-2-3', value: 'push="2-3"'},
						                {text: 'push-1-2', value: 'push="1-2"'},
						                {text: 'push-1-4', value: 'push="1-4"'},
						                {text: 'push-1-3', value: 'push="1-3"'},
						                {text: 'push-1-5', value: 'push="1-5"'},
						                {text: 'push-1-6', value: 'push="1-6"'},
						                {text: 'push-1-7', value: 'push="1-7"'},
						                {text: 'push-1-8', value: 'push="1-8"'},
						                {text: 'push-1-9', value: 'push="1-9"'},
						                {text: 'push-1-10', value: 'push="1-10"'},
						                {text: 'push-1-11', value: 'push="1-11"'},
						                {text: 'push-1-12', value: 'push="1-12"'}
						            ]
						        }],
						        onsubmit: function( e ) {
						            ed.insertContent( '[simplegrid size="1-12"' + ' ' + e.data.pushgrid + ' ' + e.data.mobilegrid +']CONTENT GOES HERE[/simplegrid]');
						        }
						    });
						}
	                },
	           ]
	        });
	    },
 
        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl : function(n, cm) {
            return null;
        },
 
        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'SimpleGrid Button',
                author : 'Dallas Bass',
                authorurl : 'http://dallasbass.com',
                infourl : 'http://dallasbass.com',
                version : "1.0"
            };
        }
    });
 
    // Register plugin
    tinymce.PluginManager.add( 'wptuts', tinymce.plugins.simplegrid );
})();