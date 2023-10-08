const fs = require('fs')
displayDiseaseDescription = async(req,res) => {
    const diseaseName = req.body.disease
    console.log(diseaseName)
    fs.readFile('./dataDescription/diseases.json','utf-8',(err,data)=>{
        if(err){
           console.error(err);
           res.status(500).json({error:'Internal Server Error'})
           return 
        }
        const diseases = JSON.parse(data)
        if(diseases[diseaseName]){
            res.json(diseases[diseaseName])
        }else{
            res.status(200).json({data : 'Disease data not found'})
        }

    })
}
module.exports = {displayDiseaseDescription}