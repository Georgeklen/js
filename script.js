//sozdal pervi class
class first {
    hello() {
      this.consol = console.log("Привет я метод родителя!")
    }

}
//sozdal 2 class
class Second extends first {
    hello() {
        // vizov 1 classa
        super.hello()
        console.log("А я наследуемый метод!")
    }
}
//vizov v consol
let last = new Second()
last.hello()