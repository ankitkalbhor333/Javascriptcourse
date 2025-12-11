class User{
  constructor(nam,email){
    this.nam=nam;
    this.email=email;

  }
  viewData(){
    console.log("name :",this.nam);
    console.log("email:",this.email);
  }
}
class Admin extends User{
  constructor(nam,email){
    super(nam,email);
  }
  editDATA(){
    console.log("you can edit data of website");
  }
}
let student=new User("ankit","ankit@gmail.com");
let admin=new Admin("rahul","igkigig");
