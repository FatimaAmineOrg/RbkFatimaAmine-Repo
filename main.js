/*    web develepment 1  */
// A - 1
$('img').attr('src','https://i.pinimg.com/236x/76/ee/f8/76eef8f19a984b87cc2aec078eb7eb63--kids-cartoon-characters-childhood-characters.jpg')

// a - 2 
//  this jquery will change the input text to the color red . 
$('button#go').on('click', function(){ $('p#output').text( $('input#color').val() ).css('color', 'red'); });


// A - 3 
$('button#go').on('click',function(){ alert('button clicked ..')});

// A - 4  Insert content to the end of an element
  //$("p").append(" <b>Newly added appended text</b>.");  

// A - 5
$('div#secret').hide();
 
 //  A - - 6 ( the background-color and the Body is not in a string)
//$(body).css(background-color, 'green')

// A - 7 (chang the background color  To Red).
//$('body').css('background-color', 'red');

// A - 8
$("ol#order").append("<li><b>Here is thing four</b></li>");  

/*    web develepment 2  */

//A -1

// Bob says hi, immediately
//call function uses the function sayHi inside Alice for Bob .


/// A - 2 
function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
sayHello.call(alice); // 


// A - 3 
//result = 20;


// A - 4 
 // result  = 'hi i am window ';  // because window.name its a gloable variable


 // A - 5
 // result = 20 ;  

 // A - 6 
// Alice says hi, after 1 second /* Bind function call the function  for the object that is pass as a parameter */

// A - 7
// D - DRY - don't repeat yourself (developer efficacy).
// B - centralize code to simplify maintenance




