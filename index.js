window.addEventListener('load',()=>{

    // // day Elements
    const dayli=document.querySelector("#day");
    for(var i=0;i<31;i++)
    {
        var ele=document.createElement("option");
        ele.classList.add("dropdown-item");
        ele.value=i+1;
        ele.innerHTML=i+1;
        dayli.appendChild(ele);
    }
    
    // month elements
    const monthli=document.querySelector("#monn");
    var lis=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    for(var i=0;i<12;i++)
    {
        var ele1=document.createElement("option");
        ele1.classList.add("dropdown-item");
        ele1.value=lis[i];
        ele1.innerHTML=lis[i];
        monthli.appendChild(ele1);
    }

    // year elements
    const yerli=document.querySelector("#yer");
    for(var i=1990;i<2023;i++)
    {
        var ele1=document.createElement("option");
        ele1.classList.add("dropdown-item");
        ele1.value=i;
        ele1.innerHTML=i;
        yerli.appendChild(ele1);
    }

    // country elements
    const conli=document.querySelector("#con");
    var lis=["INDIA","AUS","USA","CHINA","JAPAN","SOUTH AFRICA","CANADA"]
    for(var i=0;i<7;i++)
    {
        var ele1=document.createElement("option");
        ele1.classList.add("dropdown-item");
        ele1.value=lis[i];
        ele1.innerHTML=lis[i];
        conli.appendChild(ele1);
    }
})





function func()
{
    var name=document.getElementById("FnameVal").value;
    let FnameLen=name.length;
    let flagname=/^[A-Za-z]+$/;
    if(flagname.test(name)===false)
    {
        alert("FirstName Not filled correctly");
        return;
    }
    if(FnameLen===0 || FnameLen>30)
    {
        alert("FirstName Not filled correctly");
        return;
    }

    var Lname=document.getElementById("LnameVal").value;
    let LnameLen=Lname.length;
    if(flagname.test(Lname)===false)
    {
        alert("LastName Not filled correctly");
        return;
    }
    if(LnameLen===0 || LnameLen>30)
    {
        alert("LastName Not filled correctly");
        return;
    }



    var dayVal=document.getElementById("day").value;
    var monVal=document.getElementById("monn").value;
    var yerVal=document.getElementById("yer").value;
    
    
    var emailVal=document.getElementById("email").value;
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(emailVal)===false)
    {
        alert("Email is incorrect");
        return;
    }
    
    var phoneVal=document.getElementById("phone").value;
    if(phoneVal.length<10)
    {
        alert("Add correct Phone Number");
        return;
    }


    var genderValM=document.getElementById("flexRadioDefault1").checked;
    var genderValF=document.getElementById("flexRadioDefault2").checked;
    var gender;
    if(genderValF)
    {
        gender="F";
    }
    if(genderValM)
    {
        gender="M";
    }
    if(genderValF===false && genderValM==false)
    {
        alert("Fill Gender");
        return;
    }

    var addressVal=document.getElementById("address").value;
    var check=/^[#.0-9a-zA-Z\s,-]+$/;
    if(check.test(addressVal)===false)
    {
        alert("fill address field");
        return;
    }

    var cityVal=document.getElementById("city").value;
    let flagCity=/^[A-Za-z]+$/;
    if(flagCity.test(cityVal)===false)
    {
        alert("fill city field correctly");
        return;
    }
    else
    {
        if(cityVal.length===0 || cityVal.length>30)
        {
            
            alert("fill city field correctly");
            return;
        }
    }


    var pincodeVal=document.getElementById("pincode").value;
    if(pincodeVal.length!=6)
    {
        alert("fill pincode correctly");
        return;
    }


    var stateVal=document.getElementById("state").value;
    let flagstate=/^[A-Za-z]+$/;
    if(flagstate.test(stateVal)===false)
    {
        alert("fill state field correctly");
        return;
    }
    else
    {
        if(stateVal.length===0 || stateVal.length>30)
        {
            
            alert("fill state field correctly");
            return;
        }
    }


    var countryVal=document.getElementById("con").value;




    var hobbielis=[];
    var flagHobb=0;
    for(var i=1;i<=5;i++)
    {
        var ss=i.toString();
        var s="hob"+ss;
        if(document.getElementById(s).checked===true)
        {
            flagHobb=1;
        }
        hobbielis.push(document.getElementById(s).value);
    }
    if(flagHobb===0)
    {
        alert("fill Hobbies correctly");
        return;
    }
    var hobbiefield=document.getElementById("hobbie_field").value;


    
    var boardlis=[];
    for(var i=1;i<=3;i++)
    {
        var sss=i.toString();
        var q="X"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill Board details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill Board name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                boardlis.push(haa);
            }
            else{
                boardlis.push(document.getElementById(q).value)
            }
            
        }
    }


    

    var twlis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="XII"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill XII details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill XII name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                twlis.push(haa);
            }
            else{
                twlis.push(document.getElementById(q).value)
            }
            
        }
    }

    var gralis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="gra"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill gra details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill gra name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                gralis.push(haa);
            }
            else{
                gralis.push(document.getElementById(q).value)
            }
            
        }
    }


    var maslis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="mas"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill mas details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill mas name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                maslis.push(haa);
            }
            else{
                maslis.push(document.getElementById(q).value)
            }
            
        }
    }






    var appliedBca=document.getElementById("flexRadioDefault11").checked;
    var appliedBcom=document.getElementById("flexRadioDefault22").checked;
    var appliedBsc=document.getElementById("flexRadioDefault33").checked;
    var appliedBa=document.getElementById("flexRadioDefault44").checked;
    var applied;
    if(appliedBca)
    {
        applied="BCA";
    }
    if(appliedBcom)
    {
        applied="BCOM";
    }
    if(appliedBsc)
    {
        applied="BSE";
    }
    if(appliedBa)
    {
        applied="BA";
    }
    if(appliedBca===false && appliedBcom==false && appliedBsc==false && appliedBa==false)
    {
        alert("Fill Applied for");
        return;
    }


    var fullDetails={
        "name":{"firstName":name,"lastname":Lname},
        "dob":{"day":dayVal,"month":monVal,"year":yerVal},
        "email":emailVal,
        "phone":phoneVal,
        "gender":gender,
        "address":addressVal,
        "city":cityVal,
        "pincode":pincodeVal,
        "state":stateVal,
        "country":countryVal,
        "hobbies":hobbielis,
        "hobbie_field":hobbiefield,
        "qualifications":{"classX":boardlis,"classXII":twlis,"graduation":gralis,"masters":maslis},
        "applied":applied
    }


    localStorage.setItem("data", JSON.stringify(fullDetails));
    location.href = "file:///E:/SEM%205/F&D/project_st2/pg2.html";

}