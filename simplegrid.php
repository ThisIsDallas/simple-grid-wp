<?php

/*
* Plugin Name: Simple Grid Shortcodes
* Description: This is a set of shortcodes for the Simple Grid CSS framework
* Version: 1.0
* Author: Dallas Bass
* Author URI: http://dallasbass.com
*/

function db_simplegrid_sc_wrapper( $atts , $content = null ){
	return '<div class="grid">' . do_shortcode($content) . '</div>';
}
 
add_shortcode('simplegrid_wrapper', 'db_simplegrid_sc_wrapper');

function db_simplegrid_sc( $atts, $content ){

	$a = shortcode_atts( array(
		'size' => '',
		'mobile' => 'none',
		'push' => 'none'
	), $atts );

	if (isset($a['mobile']) && $a['mobile'] == 'none') {
		$mobile = '';
	} else {
		$mobile = "mobile-col-" . $a['mobile'];
	}

	if (isset($a['push']) && $a['push'] == 'none') {
		$pushsize = '';
	} else {
		$pushsize = "push-" . $a['push'];
	}

	if (isset($a['push']) && $a['push'] == 'none') {
		$pushsize = '';
	} else {
		$pushsize = "push-" . $a['push'];
	}

	return '<div class="'. $pushsize . ' ' . $mobile . ' col-' . esc_attr($a['size']) . '">' . $content . '</div>';

}
 
add_shortcode('simplegrid', 'db_simplegrid_sc');

function wptuts_buttons() {
    add_filter( "mce_external_plugins", "wptuts_add_buttons" );
    add_filter( 'mce_buttons', 'wptuts_register_buttons' );
}
function wptuts_add_buttons( $plugin_array ) {
    $plugin_array['wptuts'] =  plugin_dir_url( dirname(__FILE__) ) . 'simplegrid/admin/js/simple-grid-tinymce-btn.js';
    return $plugin_array;
}
function wptuts_register_buttons( $buttons ) {
    array_push( $buttons, 'simplegrid' );
    return $buttons;
}

add_action( 'init', 'wptuts_buttons' );
 
?>