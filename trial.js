var set=document.querySelector(".set")
var details=document.querySelector(".details")


function res()
{
   var opt=set.options[set.selectedIndex].value
   var city=""
   
 if(opt=="Chennai")
   {
      city="The Indian city of Chennai has a population of 4646732. Language Spoken is Tamil and LiteracyRate is 90.20%"

   }
   else if(opt=="Bengaluru")
   {
      city="The Indian city of Bengaluru has a population of 8443675. Language Spoken is Kannada and LiteracyRate is 88.71%"
   }  
   else if(opt=="Mumbai")
   {
      city="The Indian city of Mumbai has a population of 12442373. Language Spoken is Marathi and LiteracyRate is 89.73%"
   } 
   else if(opt=="Delhi")
      {
         city="The Indian city of Delhi has a population of 16787941. Language Spoken is Hindi and LiteracyRate is 86.20%"
      }

   details.textContent=city


}