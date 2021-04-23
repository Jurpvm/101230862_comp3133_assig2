const Hotel = require('../models/Hotel');

module.exports = {
    hotels: async function() {
        const hotels = await Hotel.find();
        return {
            hotels: hotels.map((h)=>{
                return {
                    ...h._doc
                }
            })
        }
    }
}