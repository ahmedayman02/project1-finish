var formcontainer = [];

function  Applynow()
{
var  Program    =    document.getElementById("program").value;
var  Firstname  =   document.getElementById("Firstname").value;
var  Lastname   =   document.getElementById("Lastname").value;
var  BusinessEmail  = document.getElementById("BusinessEmail").value;   
var  BusinessPhone  = document.getElementById("BusinessPhone").value;
var  Company    =   document.getElementById("Company").value;
var Yourmessage =   document.getElementById("Yourmessage").value;









var form =  
{
    type : Program,
    name :Firstname,
    last : Lastname,
    email :BusinessEmail,
    phone :BusinessPhone,
    work : Company,
    desc:  Yourmessage 

    }
    
formcontainer.push(form)
displaydata();


}




function displaydata()
{




    var temp = " ";

    for(var i = 0 ; i < formcontainer.length ; i++)
    {
         temp +=    "<tr>   <td>" + formcontainer[i].type    +  "</td>       <td>" + formcontainer[i].name    +  "   </td>   <td>" + formcontainer[i].last    +  "</td>   <td>" + formcontainer[i].email    +  "</td>        <td>" + formcontainer[i].phone    +  "</td>      <td>  " + formcontainer[i].work    +  " </td>      <td>  " + formcontainer[i].desc    +  "  </td>                    </tr>"
    } 
    


    document.getElementById("tablebody").innerHTML = temp ;     

}