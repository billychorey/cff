/* js file */

( function( window, undefined ){ ///open closure  

    $( function(){ //ready function


        var list = $( ".navigation" ).find( "ul" );

        list.hide();

        $( ".mobile_nav_button" ).on( "click", function( e ){

            list.slideToggle( 300 );
            e.preventDefault();
        } );

        $( window ).on( "resize load", function( e ){

        	if( $( window ).width() >= 700 ){

        		list.removeAttr( "style" );
        	}
        } );

    } ); //close of ready function

} )( window, undefined ); ///close closure