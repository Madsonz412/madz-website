<?php
/**
 * MADZ theme functions
 * Madsonz Ads & Marketing Pvt. Ltd.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

/**
 * Theme setup: title tag, thumbnails, HTML5 markup, nav menu.
 */
function madz_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' )
	);
	add_theme_support( 'custom-logo' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'madz' ),
		)
	);
}
add_action( 'after_setup_theme', 'madz_setup' );

/**
 * Enqueue theme styles and scripts.
 */
function madz_scripts() {
	// Brand fonts: Big Shoulders Display, IBM Plex Sans, IBM Plex Mono.
	wp_enqueue_style(
		'madz-fonts',
		'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
		array(),
		null
	);

	// Main theme stylesheet (style.css).
	wp_enqueue_style( 'madz-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Hero stamp animation.
	wp_enqueue_script( 'madz-stamp', get_template_directory_uri() . '/assets/js/stamp.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'madz_scripts' );

/**
 * Fallback menu if no "Primary Menu" has been assigned in
 * Appearance > Menus yet.
 */
function madz_default_menu() {
	echo '<a href="' . esc_url( home_url( '/#services' ) ) . '">' . esc_html__( 'Services', 'madz' ) . '</a>';
	echo '<a href="' . esc_url( home_url( '/#work' ) ) . '">' . esc_html__( 'Work', 'madz' ) . '</a>';
	echo '<a href="' . esc_url( home_url( '/#approach' ) ) . '">' . esc_html__( 'Approach', 'madz' ) . '</a>';
	echo '<a href="' . esc_url( home_url( '/#contact' ) ) . '">' . esc_html__( 'Contact', 'madz' ) . '</a>';
}
