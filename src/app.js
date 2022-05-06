// const { append } = require('express/lib/response');
const mongoose = require('mongoose');
const  DB = mongoose.connect("mongodb://localhost:27017/db1",{
    useNewUrlParser:true,
    // useUndefinedTopology:true
})
 .then(()=>{
    console.log("conn. sucessful");})
.catch((err)=>{
    console.log(err);
   })


   const playlistSchema = new mongoose.Schema({
       name:{
           type:String,
           required:true
       },
      Ctype:String,
      videos:Number,
      author:String,
      active:Boolean,
      date:{
          type:Date,
          default:Date.now

      }
   })

   const createDocument = async()=>{
     try{const Playlist = new mongoose.model("playlist",playlistSchema);

     const ReactPlaylist = new Playlist({
         name:"typescript",
         ctype:"web dev",
         videos:80,
         author: "mohit",
         active:true
  
     });
     
     const expressplaylist  = new Playlist({
        name:"express",
        ctype:"web dev",
        videos:80,
        author: "mohit",
        active:true
 
    });
    
    const mongoPlaylist = new Playlist({
        name:"mongodb",
        ctype:"web dev",
        videos:80,
        author: "mohit",
        active:true
 
    });
  
     const result = await  Playlist.insertMany([ReactPlaylist,expressplaylist,mongoPlaylist]);
     console.log(result);}catch(err){
         console.log(err);
     }  
   

   }
//    createDocument()
 const getDocument = async ()=>{
    const Playlist = new mongoose.model("playlist",playlistSchema);

     const result = await  Playlist
     .find({videos: {$lte:50}})
     
     console.log(result);
 }
// getDocument();
 const updateDocument =  async(_id)=>{
   try{const Playlist = new mongoose.model("playlist",playlistSchema);

        const result = await Playlist.updateOne({_id:_id},
        {$set:{
            name:"javascript522"

        }
      }); 
    console.log(result);
} catch(err){
    console.log(err);
}  
 }


updateDocument('6270b30c7b75ac303218a748');