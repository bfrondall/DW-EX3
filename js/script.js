// var quotes = [ "We dont make mistakes, just happy little accidents.", 
// "Creativity Takes Courage"

// ]

function Quote(images, author, tags, title) {
	this.image = images;
	this.author = author;
	this.tags = tags;
	this.title = title;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})

		container.css("background", this.color)
		container.addClass("quote")
		container.addClass("h1")

		var quoteString = "";
		quoteString += "<h1>" + this.title + "</h1>"
		quoteString += "<p>" + this.image + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		
		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}


var quotes = [
	new Quote('<img src="imgs/Flower_people.png">', "Mike Perry", ["Trippy", "Abstract", "colourful"], "Flower People"),
	new Quote('<img src="imgs/LyftStaycation_MikePerry.jpg">', "Mike Perry", ["Typography", "colourful", "banner"], "Lyft Station"), 
	new Quote('<img src="imgs/Space.jpg">', "Mike Perry", ["Trippy", "Abstract", "colourful"], "Space"), 
	new Quote('<img src="imgs/Floral_Stare_Down18x18.jpg">', "Mike Perry", ["Abstract", "Trippy", "painting"], "Floral Stare"), 
	new Quote('<img src="imgs/What_Care_Feels_Like.png">', "Mike Perry", ["Typography", "Abstract", "colourful"], "What Care Feels Like"),
	new Quote('<img src="imgs/Where_Everyone_Knows_Your_Name_Color_IP2.jpg">', "Mike Perry", ["Poster", "Abstract", "colourful"], "Where Everyone Knows Your Name"),
	new Quote('<img src="imgs/NYC_Miami_Final_Mike_Perry.jpg">', "Mike Perry", ["Poster", "Typography", "Trippy"], "NYC + MIAMI FINAL"),
	new Quote('<img src="imgs/Run_NYC_Run_Anywhere_COLORED03.jpg">', "Mike Perry", ["Poster", "Typography", "colourful"], "Run NYC Run"),
	new Quote('<img src="imgs/Mike_Perry_Dreamspace_Poster.jpg">', "Mike Perry", ["Poster", "Trippy", "colourful"], "Dream Space"), 
	]

var tagList = []
quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
		if (!tagList.includes(tag)) {
			tagList.push(tag);
			$(".buttons").prepend("<button class='filter' id= '" + tag + "'>" + tag + "</button>")
		}
	})
})

console.log(tagList)

$(".filter").on("click", function(){
	var tag = $(this).text()
	console.log(tag)

	$(".quote").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")
})

