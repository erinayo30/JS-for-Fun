// when user click purchase button render out
//"something went wrong, pleaase try again" in the paragraph
// that has id="Error"

let errorParagraph = document.getElementById("error")

console.log(errorParagraph)

function Purchase() {
    console.log("onclick")
    errorParagraph.textContent = "something went wrong, pleaase try again"
}