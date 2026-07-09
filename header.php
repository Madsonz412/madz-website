<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="docket-bar">
	<span>DOCKET NO. 001/26</span>
	<span class="mid"><?php bloginfo( 'name' ); ?></span>
	<span class="status"><span class="dot"></span>OPEN FOR NEW CLIENTS</span>
</div>

<header class="nav">
	<div class="logo">
		<?php if ( has_custom_logo() ) : ?>
			<?php the_custom_logo(); ?>
		<?php else : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">MADZ<span class="dot-red">.</span></a>
		<?php endif; ?>
	</div>

	<?php
	wp_nav_menu(
		array(
			'theme_location' => 'primary',
			'container'      => 'nav',
			'container_class' => 'links',
			'items_wrap'     => '%3$s',
			'fallback_cb'    => 'madz_default_menu',
		)
	);
	?>

	<a class="btn-outline" href="#contact"><?php esc_html_e( 'Book a call', 'madz' ); ?></a>
</header>
