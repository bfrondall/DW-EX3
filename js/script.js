// var quotes = [ "We dont make mistakes, just happy little accidents.", 
// "Creativity Takes Courage"

// ]

function Quote(quoteText, author, tags, color) {
	this.quote = quoteText;
	this.author = author;
	this.tags = tags;
	this.color = color;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})

		container.css("background", this.color)
		container.addClass("quote")

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		
		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}


var quotes = [
	new Quote('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
	new Quote('"Creativity takes Courage"', "Henry Matisse", ["painting", "creativity"], "lightblue")
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

