<?php

add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
function enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
    //commented out to allow for w3 cache to minify all stylesheets
    //wp_enqueue_style( 'child-style', get_stylesheet_uri() );
    wp_enqueue_script( 'custom-scripts', get_stylesheet_directory_uri() . '/js/scripts.js');
}


