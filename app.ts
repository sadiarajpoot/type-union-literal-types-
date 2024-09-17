// union
type StudentName = string
type Alien = string;
let StudentName: StudentName = "Ali"
let magic: Alien = "Jaddu"
console.log(StudentName,magic);

// type allias
type MainCourses = string[]
let mainCourse: MainCourses = ["biryani", "halwapuri"];
console.log(mainCourse);

type ChattarPattar = string[]
let chezeein: ChattarPattar = ["papar", "golgappy", "fruitchaat"];
console.log(chezeein);

type BooleanArray = boolean[]
let Present: BooleanArray = [true, false, false];
console.log(Present);

// type union
let rollNumber: string | number = 12345 //number
rollNumber="6789" // string
console.log(rollNumber);

let EmailAddress: string | number = "Abc@gmail.com"
EmailAddress = 1234
console.log(EmailAddress);

let isPresent: string | boolean
isPresent = true
console.log(isPresent);
isPresent = "I am present"
console.log(isPresent);

let isbuy: boolean | string
let booleanbuy = true
let stringbuy = "no"
console.log(booleanbuy, stringbuy);

// type literal values ko he data type assign krty hain
let size: "small" | "medium" | "large"
size = "small"
size = "medium"
size = "large"
// size = "mega" error
console.log(size);

let trafficLight: "red" | "green" | "yellow"
trafficLight = "red"
trafficLight = "green";
trafficLight = "yellow"
console.log(trafficLight);
 

// object data types
let MyCar: {
	make: string,
	modal: number,
	varient: string | number
	isAC: () => boolean
	isMaxSpeed : () => number
} = {
	make: "Toyota",
	modal: 2024,
	varient: "1800cc",
	isAC: () => true,
	isMaxSpeed : () => 200
}
console.log(MyCar);
console.log(MyCar.isAC());
console.log(MyCar.isMaxSpeed());
 
// type allias
type MyCarOne = {
  make: string,
  modal: number,
  varient: string | number,
  isAC: () => boolean;
  isMaxSpeed: () => number,
};
let Car: MyCarOne = {
  make: "Toyota",
  modal: 2024,
  varient: "1800cc",
  isAC: () => true,
  isMaxSpeed: () => 200,
};
console.log(Car);
console.log(Car.isAC());
console.log(Car.isMaxSpeed());

// nested object
type slip = {
  CostomerName: string;
  products: {
		ProductName: string
		price:number
  };
};
 
let bill:slip = {
	CostomerName: "Ali",
	products: {
		ProductName: "bread",
		price :100
	}
}
console.log(bill.products.ProductName);

// type intersection
type StudentTwo = {
	studentName: string,
	rollnumber : number
}
type TeacherSenior = {
	teachername: string,
	teacherexperience : string | number
}
type ClassRoom =  TeacherSenior & StudentTwo
let classRoom : ClassRoom = {
	studentName: "ali",
	teachername: "sir ali",
	rollnumber: 1234,
	teacherexperience: 4
}
console.log(classRoom);
//---------------------------------------------------------//

type Employee =  {
	empolyeeName: string,
	empolyeeExp: string | number,
}
type Manager = {
  managername: string;
  managerExp: string | number;
}
type Mix = Employee & Manager

let job:Mix = {
	empolyeeName: "abc",
	empolyeeExp: 4,
	managername: "cde",
	managerExp:3
}
console.log(job);

// interface
interface Name {
	name: string,
	batch: {
		batchNO : string
	}
}
const myName: Name = {
	name: "ali",
	batch: {
		batchNO:"wed2-5"
	}
}
console.log(myName.batch.batchNO);
// type alies
type Student = string
type Teacher = string
let teachername: Teacher = "sir ali"
let studentName: Student = "class"
console.log(studentName);
console.log(teachername);

// object data types
let myCarTwo: {
	make: string,
	modal: number,
	varient: string | number
	isAC: () => boolean
	isMaxSpeed : () => number
} = {
	make: "Toyota",
	modal: 2024,
	varient: "1800cc",
	isAC: () => true,
	isMaxSpeed : () => 200
}
console.log(myCarTwo);
console.log(myCarTwo.isAC());
console.log(myCarTwo.isMaxSpeed());
 

// object data types
let myCar: {
	make: string,
	modal: number,
	varient: string | number
	isAC: () => boolean
	isMaxSpeed : () => number
} = {
	make: "Toyota",
	modal: 2024,
	varient: "1800cc",
	isAC: () => true,
	isMaxSpeed : () => 200
}
console.log(myCar);
console.log(myCar.isAC());
console.log(myCar.isMaxSpeed());
 
interface myStudent{
	name: string,
	age: number,
	isSenior: boolean,
	//grade:string
}
interface yourStudent{
	name: string,
	age: number,
	isSenior: boolean,
	salary: number,
	exp:number
}
let mystudent: myStudent = {
	name: "sadia",
	age: 23,
	isSenior: true,
	//grade: "A"
};
let yourstudent: yourStudent = {
	name: "emaan",
	age: 89,
	isSenior: false,
	salary:9000000,
	exp: 9
};
mystudent = yourstudent
// yourstudent=mystudent //error
interface Ball{
  diameter:number,
   area:number
}
interface Tube{
  diameter:number,
   area:number,
   depth:number
}
let ball:Ball={
  diameter:67,
   area:4
}
let tube:Tube={
  diameter:7,
  area:5,
   depth:5
 }
// tube=ball //incorrect
ball=tube //correct
type myInfo = {
  name: string;
  age: number;
  address: {
    street: number;
    city: string;
    country: string;
  };
};
let infoReady: myInfo = {
  name: "sadia",
  age: 67,
  address: {
    street: 99,
    city: "karachi",
    country: "pakistan",
  },
};
console.log(infoReady.age);
console.log(infoReady.address.city);























