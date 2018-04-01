/**
 * Created by Sidhant Magow on 14-06-2017.
 */
$().ready(function () {

   var bool1=false,bool2=false,bool3=false,bool4=false;

    $('#name').on("focus",function (event) {
        event.target.style.background="#ebebe0";
    });
    $('#name').on("blur",function (event) {
        event.target.style.background="";

        if($('#name').val().length<1){
            $('#nameSpan')[0].innerHTML="Please enter your name.";
            bool1=false;
        }
        else{
            $('#nameSpan')[0].innerHTML ="&#10004;";
            bool1=true;
        }

    })

    $('#email').on("focus",function (event) {
        event.target.style.background="#ebebe0";
    });
    $('#email').on("blur",function (event) {
        event.target.style.background="";

        var str=$('#email').val();
        var patt = new RegExp(" ");
        var res = !patt.test(str);
        var pattern2=/[A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]@[A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]*\.[A-Za-z0-9]*/g;
        var result2= pattern2.test(str);
        console.log(result2);
         var result=res&&result2;
        if(result===false){
            $('#emailSpan')[0].innerHTML="Please enter valid email id";
        }
        else{
            $('#emailSpan')[0].innerHTML ="&#10004;";
        }

    })
    $('#profile').on("change",function (event) {
            console.log($(this)[0]);
       if($(this)[0].files[0].size > 1000000){
           $('#profileSpan')[0].innerHTML ="size exceeds 1 mb ";
           bool3=false;
       }
       else{
           $('#profileSpan')[0].innerHTML ="&#10004;";
           bool3=true;
           console.log($(this));
       }


    })

    $('#mobile').on("focus",function (event) {
        event.target.style.background="#ebebe0";
    });
    $('#mobile').on("blur",function (event) {
        event.target.style.background="";

        if($('#mobile').val().length!=10){
            $('#mobileSpan')[0].innerHTML="Please enter valid mobile no.";
            bool4=false;
        }
        else{
            $('#mobileSpan')[0].innerHTML ="&#10004;";
            bool4=true;
        }

    })

    $('#submit').click(function () {
     console.log($(this));
     var formdata=new FormData();
     formdata.append("name",$('#name').val());
        formdata.append("email",$('#email').val());
        formdata.append("profile",$('input#profile')[0].files[0]);
        formdata.append("mobileno",$('#mobile').val());

     boolAns=bool1&&bool3&&bool4;
        if(boolAns===true) {
            $.ajax({
                type:"POST",
                url:"https://www.google.co.in/ ",
                data: formdata,
                cache: false,
                contentType: false,
                processData: false,
                success: function () {
                    console.log("form submitted");
                }
            });

        }
        else{
            console.log("cannot submit");
        }
    })
})