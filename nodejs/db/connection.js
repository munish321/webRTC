import mongoose from "mongoose"
export const main= async(url)=>{
    if(url){
         await mongoose.connect(url)
    }
   
}

main().then(res=>console.log('every thing is fine')).catch((err)=>console.log(err))