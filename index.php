<?php
/**
 * Main fallback template (used for the blog index, search results,
 * and any view without a more specific template).
 */
get_header();
?>

<div class="site-content">

	<?php if ( have_posts() ) : ?>

		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article <?php post_class(); ?>>
				<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				<p class="entry-meta">
					<?php echo esc_html( get_the_date() ); ?> · <?php the_author(); ?>
				</p>
				<div class="entry-content">
					<?php
					if ( is_singular() ) {
						the_content();
					} else {
						the_excerpt();
					}
					?>
				</div>
			</article>
		<?php endwhile; ?>

		<div class="posts-nav">
			<div><?php next_posts_link( '← Older' ); ?></div>
			<div><?php previous_posts_link( 'Newer →' ); ?></div>
		</div>

	<?php else : ?>

		<p><?php esc_html_e( 'Nothing to show here yet.', 'madz' ); ?></p>

	<?php endif; ?>

</div>

<?php get_footer(); ?>
