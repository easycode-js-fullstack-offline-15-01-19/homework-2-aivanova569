// -------------------------- Home work --------------------------
// ---------------------- Ivanova Anastasiia ---------------------

// --------------------- primitive conversion --------------------
// ------------------------------ 1 ------------------------------
// let a = 0 || 'string';		//string - т.к. || выводит первое true
// let a = 1 && 'string';		//string - т.к. && выводит первое false
// let a = null || 25;			//25 - т.к. || выводит первое true
// let a = null && 25;			// null
// let a = null || 0 || 35;		// 35
// let a = null && 0 && 35;		// null

// ------------------------------ 2 ------------------------------
// 12 + 14 + '12' = 2612	//Оператор "+" в данном случае прибавляет 12 и 14 как число, и затем 12 как строку
// 3 + 2 - '1' = 4			//Оператор "-" работает только с числами, так что он сразу приводит "1" к 1.
// '3' + 2 - 1 = 31			//Работает по принципу предыдущего выражения
// true + 2 = 3				//true преобразуется в 1
// +'10' + 1 = 1			//Унарный "+" преобразyет строку в число
// undefined + 2 = NaN		//undefined преобразуется в NaN
// null + 5					//null преобразуется в 0
// true + undefined = NaN	//undefined преобразуется в NaN


// --------------------------- if elce ----------------------------
// ------------------------------ 1 -------------------------------
let x = 'hidden';
if (x === 'hidden'){
	x = 'visible';
} else {
	x ='hidden';
};

// ------------------------------ 2 -------------------------------
let b = 0;
if (b === 0) {
	b = 1;
} else if (b < 0) {
	b = 'less then zero';
} else {
	b = b *10;
};

// ------------------------------ 3 -------------------------------
let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};
if (car.age > 5) {
	console.log('Need Repair'),
	car.needRepair = true;
} else {
	car.needRepair = false;
};

// ------------------------------ 4 -------------------------------
let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15%'
};
if (item.discount) {
	item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount) / 100,
	console.log(item.priceWithDiscount);
} else {
	console.log(item.price);
};

// ------------------------------ 5 -------------------------------
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
};

// //----------------- Тернарный оператор. Switch case ----------------
// // ------------------------------ 1 --------------------------------
let a = 'block';
switch (a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
};

// ------------------------------ 2 --------------------------------
// ----------------------------- 2.1 -------------------------------
let y = 'hidden';
y = (y === 'hidden') ? 'visible' : 'hidden';

// ----------------------------- 2.2 -------------------------------
let z = 0;
z = (z === 0) ? 1 : (z < 0) ? 'less then zero' : z *10;

// ----------------------------- 2.3 -------------------------------
let auto = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};
auto.age = (auto.age > 5) ? (console.log('Need Repair'), auto.needRepair = true) : auto.needRepair = false;

