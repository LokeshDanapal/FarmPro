const fs = require('fs')
displayTextureDescription = async(req,res)=>{
   const texture = req.body.texture
   console.log(texture)
   fs.readFile('./dataDescription/soil.json','utf-8',(err,data)=>{
       if(err){
            console.log(err);
            res.status(404).json({error : "Internal Server Error"})
            return
       }
       const soilTexture = JSON.parse(data)
       if(soilTexture[texture]){
            res.json(soilTexture[texture])
       }else{
            res.status(200).json({data: "Texture description not found"});
       }
   })
}

module.exports = {displayTextureDescription}