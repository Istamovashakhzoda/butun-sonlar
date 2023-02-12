"use script"
//Butun sonlarga oid masalalar

//1-masala

/*let L= Number(prompt("santimetr"))
 let S = (L -(L % 100) / 100)
 console.log(S);*/
 
 //2-MASALA
 /*let M = Number (prompt("metr"))
 let D = (M- (M % 1000) / 1000)
 console.log(D);*/
 
 
 //3-MASALA
 /*let A= Number(prompt("bayt"))
 let KB = (A - (A % 1024)) / 1024;
 console.log(KB);*/

 //4-MASALA
 /*let e =Number(prompt("A:"));
 let b = Number(prompt("B:"));
 let d =( A -(A % B ) / B );
 console.log(d);*/

 //5-MASALA
 /*let e =Number(prompt("A:"));
 let b = Number(prompt("B:"));
 let d =( A -(A % B ));
 console.log(d);*/
 
 //6-MASALA
 /*let a =Number(prompt("son kiriting:"));
 let x = (a/10);
 console.log(x);
 let y =(a%10);
 console.log(y);
 let a1=(x<10);
 let a2 =(y<10);*/

 //7-MASALA
 /*let a =Number(prompt("sonni kiriting:"));
 let b = ((a-b)*10);
 console.log(b);
 let c =(a/10);
 console.log(c);
 //let d =(b+c);
 //console.log(d);
 let d=((a-b)*10 +(a/10));
 console.log(d);*/

 //8-MASALA
 /*let a =Number(prompt("raqam:"));
 let b=(a/10);
 console.log(b);
 let c =((a+b)*10)
console.log(c);
//let d =((b+c)*10);
//console.log(d);
let d=(b+c);
console.log(d);
let g=((b-c)*10);
console.log(g);*/

//9-MASALA
/*let a =Number(prompt("uchxonali:"));
let b =(a/100);
console.log(b);*/

//10-MASALA
/*let a = Number(prompt("o'nliklar:"));
let b =(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(c/10);
console.log(d);*/

//11-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"))
let b=(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(a/10);
console.log(d);
let f=(b+d-c);
console.log(f);*/

//12-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"));
let b=(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(a/10);
console.log(d);
let e=((c-d)*10)
let f=((b+d)*10 + (e/100));
console.log(f);*/

//13-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"));
let b=(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(a/10);
console.log(d);
let e=((c-d)*10)
console.log(e);
let f=((b+100)*c +(e/10));
console.log(f);*/

//14-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"));
let b=(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(a/10);
console.log(d);
let e=((c-d)*10)
console.log(e);
let f=((b+10)*d +(e*100))
console.log(f);*/

//15-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"));
let b=(a/100);
alert(b);
let c=(a+b);
alert(c);
let d=(a/10);
alert(d);
let e=((c-d)*10)
alert(e);
let f =((b*10+d)(e+100));
alert(f);*/

//16-MASALA
/*let a =Number(prompt("raqamlar yigindisi:"));
let b=(a/100);
console.log(b);
let c=(a+b);
console.log(c);
let d=(a/10);
console.log(d);
let e=((c-d)*10)
console.log(e);
let f=((b+100*d)(e+10));
console.log(f);*/

//17-MASALA
/*let a =Number(prompt("yuzliklar xonasi:"));
let b =(a/1234);
console.log(b);
let c =(a*1234);
console.log(c);
let d =(c/100);
console.log(d);
let e=((d-c)*100);
console.log(e);
let f=((c+d)*100)
console.log(f);*/

//17-MASALA
/*let a =Number(prompt("17-masala:"));
let b =(a/1000);
alert (b);
let c=(a%1000);
alert(c);*/


//18-MASALA
/*let a =Number(prompt("sonni kiriting:"));
let b =(a/1000);
alert (b);
let c=(a*1000);
alert(c);*/

//19-MASALA
/*let a =Number(prompt("minut:"));
let b=(a/3600);
//let b=(a/60);
alert (b);*/

//20-MASALA
/*let a =Number(prompt("soat:"));
//let b=(a/3600);
let b=(a/60);
alert (b);*/

//21-MASALA
/*let a =Number(prompt("minut-sekunt:"));
let b=(a/3600);
//let b=(a/60);
alert (b);
let c=((a-b)*3600);
alert(c);*/

//22-MASALA
/*let a =Number(prompt("soat-sekunt:"));
let b=(a/60);
//let b=(a/60);
alert (b);
let c=((a-b)*60);
alert(c);*/

//23-MASALA
/*let a =Number(prompt("to'rttasi birda:"));
let b=(a/60);
//let b=(a/60);
alert (b);
let c=((a-b)*60);
alert(c);
let d=(a/3600);
//let b=(a/60);
alert (d);
let e=((d-c)*3600);
alert(e);*/

//24-28-MASALA
/*let day =Number(prompt("choose the week days:"));
let output;
switch (day){
  case 0:
    output="Yakshanba"
    break;
    case 1:
      output ="Dushanba"
      break;
      case 2:
        output="Seshanba"
        break;
        case 3:
          output="Chorshanba"
          break;
          case 4:
          output="Payshanba"
          break;
          case 5:
            output="Jum'a"
            break;
            case 6:
              output="Shanba"
              break;
}
alert(`${output}`);*/

//29-MASALA
/*let a=Number(prompt("a-tomon"));
let b=Number(prompt("b-tomon"));
let c=Number(prompt("c-tomon"));
let d=((a*b)/(c*c));
alert(d);
let e=((a*b)/(c*c)-d);
alert(e);*/

//30-MASALA
/*let a=Number(prompt("unkown year:"));
let b=(a/100);
alert(b);
let d=(b+1);
alert(d);*/







