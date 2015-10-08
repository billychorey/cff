/* js file */

( function( window, undefined ){ ///open closure  

    $( function(){ //ready function

        var list = $( ".navigation" ).find( "ul" );

        $( ".mobile_nav_button" ).on( "click", function( e ){

            list.slideToggle();
            e.preventDefault();
        } );



    } ); //close of ready function

} )( window, undefined ); ///close closure