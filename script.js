class student{
               constructor(name, year, roll ) {
                 this.name = name;
                 this.year = year;
                 this.roll = roll;
               }
}
// use student class with two object
student1 = new student("Riya",2010,4650);
document.write(student1.name +"<br>")
document.write(student1.year +"<br>")
document.write(student1.roll +"<br>")



student2 = new student("Arjun",2013,4320);
document.write(student2.name +"<br>");
document.write(student2.year +"<br>")
document.write(student2.roll +"<br>")

// printing info of student

// printInfo(){
//     document.write("Name :"+this.name +"<br>");
//     document.write("Year :"+this.year +"<br>");
//     document.write("Roll :"+this.roll +"<br>");

// }
// student1.printInfo

class Car {
            constructor(brand) {
            this.carname = brand;    
            }
        present() {
              return 'I have a' +this.carname;

        }
}
class Model extends Car {
        constructor(brand,mod) {
             super(brand);
             this.model = mod;
        }

}
Car = new Model("Lamborghini","Hurrican");
document.write(Car.present());


