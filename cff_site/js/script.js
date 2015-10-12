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

    // beginning of trial jquery for donate

	    var input = $( ".other").find("form");

		input.hide();
		$(".other_button").on("click",function(e){

			input.slideToggle(300);
			e.preventDefault();

		});


      
	// end of test jquery

    } ); //close of ready function

} )( window, undefined ); ///close closure