// make Jar class, help from Mitchell
class Jar {
    constructor(label, amount) {
      this.label = label
      this.amount = amount
  
    }
  
    spend(amount) {
      if (this.amount > amount) {
        this.amount -= amount
        return true  // does not allow negative balance in jar
      }
  
      return false
    }
  
    deposit(amount) {
      this.amount += amount
    }
    
  
   
  }
  
  export default Jar;
