
const historyService = require('../services/history-service.js');


/* ----------  RENDER PROCESSING VIEW  ---------- */
function saveHistory(req, res, next) {
    let positions = req.body.positions
    console.log("antes de borrar", positions);
    historyService.insertData({positions, winner: req.body.winner})
    res.status(200) ;

}

async function getHistory(req, res, next) {
    let response = await historyService.getData()
    return res.status(200).json({success: true, 'data': response}) ;

}

module.exports = {
    saveHistory,
    getHistory
}
