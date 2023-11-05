const userinput = document.getElementById("date");
userinput.max=new Date().toISOString().split("T")[0];

let age=document.getElementById("age");


function calculate(){
    let birth=new Date(userinput.value);
    let y1=birth.getFullYear();
    let m1=birth.getMonth()+1;
    let d1=birth.getDay();

    let today=new Date();
    let y2=today.getFullYear();
    let m2=today.getMonth()+1;
    let d2=today.getDay();

    let y3,m3,d3;
    y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1;
    }else{
        y3--;
        m3=12+m2-m1;
    };

    if(d2>=d1){
        d3=d2-d1;
    }else{
        m3--;
        d3=getdaysinmonth(y1,m1)+d2-d1;
    }
    console.log(y3,m3,d3);
    age.innerHTML="you are "+y3+"years,"+m3+"months,"+d3+"days old";

}
function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}

