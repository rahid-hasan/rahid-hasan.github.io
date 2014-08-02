( function( $ ) {

	var video = $( '.video-wrapper embed, .video-wrapper iframe, .video-wrapper object, .video-wrapper video' );

	video.each( function() {

		$( this )
			// jQuery .data does not work on object/embed elements
			.attr( 'data-ratio', this.height / this.width )
			.attr( 'data-width', this.width )
			.attr( 'data-height', this.height );

	} );

	function videoResponsive() {

		video.each( function() {

			var wrapper = $( this ),
			    wrapperWidth = wrapper.attr( 'data-width' ),
			    wrapperHeight = wrapper.attr( 'data-height' ),
			    wrapperRatio = wrapper.attr( 'data-ratio' ),
			    hentryWidth = $( '.hentry' ).width();

			wrapper
				.removeAttr( 'height' )
				.removeAttr( 'width' );


			if ( wrapperWidth > hentryWidth ) {

				wrapper
					.width( hentryWidth )
					.height( hentryWidth * wrapperRatio );

			} else {

				wrapper
					.width( wrapperWidth )
					.height( wrapperHeight );

			}

		} );

	}

	$( window ).load( function() {

		videoResponsive();

	    // If resize window
	    $( window ).resize( function() {

	    	videoResponsive();

	    } );

	} );

} )( jQuery );
