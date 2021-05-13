function change(){
    var x= document.getElementById("tywis").value;
    if(x==0){
        alert("Please give your wishes");
    }
    else{
        document.getElementById("wish").innerHTML=x;
    }
    var y= document.getElementById("tfn").value;
    if(y==0){
        alert("Please provide your friend name");
    }
    else{
        document.getElementById("name").innerHTML=y;
    }
    var z=document.getElementById("td").value;
    if(z==0){
        alert("Write some descrition");
    }
    else{
        document.getElementById("de").innerHTML=z;
    }

    /*var a=document.getElementById().value;
    document.getElementById().innerHTML=a;*/

    var bo=document.getElementById("boc").value;
    document.getElementById("left").style.borderColor=bo;

    var b=document.getElementById("bc").value;
    document.getElementById("left").style.backgroundColor=b;

    /*var c=document.getElementById("wc").value;
    document.getElementById("wcc").style.fill=c;*/

    var d= document.getElementById("tc").value;
    document.getElementById("wish").style.color=d;

    var e= document.getElementById("nc").value;
    document.getElementById("name").style.color=e;

    var f= document.getElementById("dc").value;
    document.getElementById("de").style.color=f;

    var g= document.getElementById("fw").value;
    document.getElementById("wish").style.fontFamily=g;

    var h= document.getElementById("fn").value;
    document.getElementById("name").style.fontFamily=h;

    var i= document.getElementById("fd").value;
    document.getElementById("de").style.fontFamily=i;

    var filesSelected = document.getElementById("tp").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.getElementById("im");
                imageLoaded.src = fileLoadedEvent.target.result;
               // document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }

}