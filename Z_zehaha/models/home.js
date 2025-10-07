    //fake db
    const addedhouses=[];
    
    exports.home=class Home{
        constructor(houseName){
            this.houseName=houseName;
        }

        save(){
            addedhouses.push(this) // push current obj
        }
        static fetch(){
            return addedhouses;
        }
    }