if(Java.available)
{
console.log("Java Available");
Java.perform(function(){
Java.enumerateLoadedClasses({
	onMatch: function (className){
		console.log(className)
}, onComplete: function (){}})})

}
else
{
console.log("Java Not Available");
}
