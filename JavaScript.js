document.write("<h1><i><mark>tema and cartoon</mark></i></h1>");
//alert("คุณได้รับเงินราวัล 100 ล้านบาท 'กดตกลงเพื่อยืนยัน' ");
console.log("Hello JavaScript");
console.error("มีไวรัส");
console.warn("เจอขัอผิดพลาด");
// แบบที่ 1 พิมพ์ได้แบบสั้นๆหลายบรรทัดไม่ได้ ใช้สำหรับข้อความสั้นๆบรรทัดเดียว
/*
แบบที่ 2 พิมพ์หลายบรรทัดได้ ใช้สำหรับข้อความยาวๆ
*/

/*
รูปแบบการตั้งชื่อ (เรื่องตัวแปรและชนิดข้อมูล)
1. ขึ้นต้นด้วยตัวอักษรในภาษาอังกฤษตามด้วยตัวอักษรหรือตัวเลข
2. ห้ามขึ้นต้นด้วยตัวเลขหรือสัญลักษณ์พิเศษ
3. ขึ้นต้นด้วย $ (dollar sign) และ _ (underscore) ได้
4. มีลักษณะเป็น case sensitive คือ ตัวพิมพ์เล็กพิมพ์ใหญ่จะมีค
วามหมายที่แตกต่างกัน
5. ไม่ซ˵ากับคําสงวน (Keyword)
*/

let $temacartoon; // สร้างแปรแบบไม่กำหนดค่าเริ่มต้น
console.log($temacartoon);

let Temacartoon;
Temacartoon = "tmea love cartoon "; // แบบกำหนดค่าเริ่มในตัวแปร
console.log(Temacartoon);
document.write(Temacartoon);

let $for;
$for = 230666;
console.log($for);
document.write($for);

let $if = " cartoon",
  $else = " tema ",
  _int = 23;
console.log($if, $else, _int);
document.write($if, $else, _int);

let tt = "tawan";
console.log("Name = ", tt);

tt = "love cartoon";
console.log("เปลี่ยนตัวแปรแล้ว", tt);

const $Number = 230666; //ค่าคงที่
console.log("After = ", $Number);

/*
$Number = 8.009
console.log($Number) ทำการเปลี่ยนในปัจจุบันไม่ได้ เพราะ ถูกกำหนดให้เป็นค่าคงที่ตั้งแต่แรกแล้ว
*/

// เปลี่ยน Numder ไปเป็น String
/*
1. parseInt
2. parseFloat
3. + เติมด้านหน้าของ Srting
 */
let x = parseInt("1.2");
console.log(x);

x = parseFloat("1.2");
console.log(x + 100);
console.log(typeof x);

let y = +"2.3"; // เติม + เป็นได้ทั้ง int , float
console.log(y);
console.log(typeof y);

// เปลี่ยน String ไปเป็น Numder
/*
1. +"" เติมไปด้านหน้าหรือด้านหลัง Numdr
2. .toString() เติมไปด้านหลัง Numder
*/
let p = "" + 230666;
console.log(p);
console.log(typeof p);

let i = (999).toString();
console.log(i);
console.log(typeof i);

// การเก็บข้อใช้ตัวแปรแบบปกติ
let numder1 = 1;
let numder2 = 2;
let numder3 = 3;
let numder4 = 4;
let numder5 = 5;
console.log(numder1, numder2, numder3, numder4, numder5);

// การเก็บข้อมูลด้วย Array
let numder = Array(100, "tema love cartoon", 300, 400, 500);
console.log(numder);
console.log("ตัวที่ 1", numder[0]);
console.log("ตัวที่ 2", numder[1]);
console.log("ตัวที่ 3", numder[2]);
console.log("ตัวที่ 4", numder[3]);
console.log("ตัวที่ 5", numder[4]);

//ยังไม่ได้สอน
let ttcc = Array("แดง", "เหลือง", "ชมพู", "น้ำเงิน");
ttcc[3] = "เขียว"; //การเปลี่ยนแทนที่ในสมาชิก
console.log(ttcc);
console.log(ttcc[1]);

//ตัวดำเนินการทางคณิตศาสตร์ใน JavaScript
//1) +
//2) -
//3) *
//4) /
//5) % หารเอาเศษ
//6) **
let a = 22,
  b = 23;
console.log(a + b); //45
console.log(a - b); //-1
console.log(a * b); //506
console.log(a / b); //0.9565217391304348
console.log(a % b); //22
console.log(a ** b); //7.51141330201283e+30

//ตัวดำเนินการเปรียบเทียบใน JavaScript ใน JavaScript
//จะเป็นข้อมูลชนิดของ Boolean
// ==   เท่ากับ , เปรียบเทียบ
// !=   ไม่เท่ากับ
// >    มากกว่า
// <    น้อยกว่า
// >=   มากกว่าหรือเท่ากับ
// <=   น้อยกว่าหรือเท่ากับ
console.log(23 == 22); //false
console.log(23 == 23); //True

let v = 234,
  k = 896;
console.log(v == k); //false
console.log(v != k); //True
console.log(v > k); //false
console.log(v < k); //True
console.log(v >= k); //false
let o = 5,
  l = 5;
console.log(o <= l); //True

// แบบที่ 1 การเปลี่ยน boolean จากตัวแปร
let $y = false;
$y = true;
console.log($y);

// แบบที่  การเปลี่ยน boolean จากตัวแปร
let $o = true;
console.log(!$o);

// ตัวดำเนินการในทางตรรกศาสตร์
// and  ->  และ
// or   ->  หรือ
// not  ->  มีความหมายตรงกันข้าง

// โจทย์ : ซื้อมะม่วงเปล่า และ เงาะหรือไม่ ? ถ้าซื้อเท่ากับกลับได้

//  a   =   ซื้อมะม่วงหรือเปล่า  และ b   =   ซื้อเงาะหรือเปล่า
//  a and b =>  a&&b
//  a = ture , b = false => T && F ==> F (ไม่สามารถกลับบ้านได้เพราะมันเป็น False)

// โจทย์ : ถ้าไม่ได้ A ทุกวิชาจะตั้งใจเรียนมากๆๆๆๆๆ หรือ ถ้าได้ A เกือบทุกจะตั้งใจเรียนโคตรๆๆๆๆๆเลย และถ้าไม่ได้อะไรเลยก็จะเอา A ทุกวิชาให้ได้เลย
// A = false or B = False => False ro False = False
// => A || B => False  (จะเอา A ทุกวิชาให้ได้เลย)

// การตัดเกรด
// 70 - 80 => A
// 50 - 60 => B
// <49     => F

let $i = 100;
console.log($i >= 70 || $i <= 100, "A");
console.log($i >= 50 && $i <= 60, "B");
console.log($i < 49, "F");

// ยังไม่ได้อัดคลิป

// สรุป กรีณ and และ or ทางตรรกศาสตร์
// and && => True && True = True มีกรีณเดียวเท่านั้น ที่เหลือเป็น True
// or || => False || False = False มีเพียงกรีณเดียวเท่านั้น ที่เหลือเป็น False

//---------------------------------------------------------------------------
// เพิ่มค่าแบบ prefix
let tc = 5,
  ct = 16;
console.log("ค่าเริ่มต้น", tc);
console.log("แบบ prefix", ++tc); // 5+1 = 6 เพิ่มค่าก่อน แล้วนำไปใช้
console.log("ค่าปัจจุบัน", tc);

// เพิ่มค่าแบบ Postfix
console.log("ค่าเริ่มต้น", ct);
console.log("แบบ Postfix", ct++); // นำค่าไปใช้ก่อน แล้วค่อยเพิ่ม
console.log("ค่าปัจจุบัน", ct);

//---------------------------------------------------------------------------
// แบบลดค่า
let ok = 23,
  ko = 34;
// เพิ่มค่าแบบ prefix
console.log("ค่าเริ่มต้น", ok);
console.log("แบบ prefix", --ok); // 5-1 = 4 ลดค่าก่อน แล้วนำไปใช้
console.log("ค่าปัจจุบัน", ok);

// เพิ่มค่าแบบ Postfix
console.log("ค่าเริ่มต้น", ko);
console.log("แบบ Postfix", ko--); // นำค่าไปใช้ก่อน แล้วค่อลดค่า
console.log("ค่าปัจจุบัน", ko);

//whta