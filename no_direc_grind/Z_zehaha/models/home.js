const fs=require('fs');
const path=require('path')
const rootdir=require('../utils/pathutil');
const { json } = require('body-parser');
//fake db
    // const addedhouses=[]; for fileoperations
    
    exports.home=class Home{
        constructor(houseName){
            this.houseName=houseName;
        }

        save(){
            Home.fetch(addedhouses=>{
                addedhouses.push(this) // push current house into this
            const ourpath=path.join(rootdir,"data",'homes.json');
            fs.writeFile(ourpath,JSON.stringify(addedhouses), e=>{
                console.log('error',e);
            });
            })
            // // addedhouses.push(this) // push current obj
            // const ourpath=path.join(rootdir,"data",'homes.json');
            // fs.writeFile(ourpath,JSON.stringify(addedhouses), e=>{
            //     console.log('error',e);
            // });
        }
        static fetch(callback){
             const ourpath=path.join(rootdir,"data",'homes.json');
             fs.readFile(ourpath,(err,data)=>{
                console.log("file read",JSON.parse(data),err);
                // addedhouses=JSON.parse(data);
                callback(!err?JSON.parse(data):[]); // for async json 
             })
            // return addedhouses;
            
        }
    }