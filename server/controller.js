const fortunes = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex].fortune;

        res.status(200).send(randomFortune);
    },
    getAllFortunes: (req,res) => {
        res.status(200).send(fortunes)
    },
    newFortune: (req,res) => {
        fortunes.push(req.body)

        res.status(200).send(req.body.fortune)
    },
    updateFortune: (req,res) => {
        let updated = req.body
        // let index = fortunes[req.params]
        let randomIndex = + Math.floor(Math.random() * fortunes.length);
        fortunes[randomIndex].fortune = updated.fortune
        
        res.status(200).send(fortunes[randomIndex].fortune)
    },
    deleteFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        fortunes.splice(randomIndex,1)

        res.status(200).send(fortunes)
    }
}