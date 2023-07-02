//business logic for contacts
function contact(firstname, lastname, phonenumber){
    this.firstname = firstname;
    this.lastname  = lastname;
    this.phonenumber = phonenumber;
}

contact.fullname = function(){
    return this.firstname + " " + this.lastname;
}
//business logic for addressbook
function AddressBook() {
    this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
};
