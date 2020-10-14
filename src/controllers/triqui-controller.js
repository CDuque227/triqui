
const historyService = require('../services/history-service.js');


/* ----------  RENDER PROCESSING VIEW  ---------- */
function saveHistory(req, res, next) {
    let positions = JSON.parse(req.body.positions)
    console.log("antes de borrar", positions);
    historyService.insertData({positions, winner: req.body.winner})
    res.status(200) ;

}

async function getHistory(req, res, next) {
    let positions = JSON.parse(req.body.positions)
    let response = await historyService.getData({positions, winner: req.body.winner})
    return res.status(200).json({success: true, 'data': response}) ;

}

module.exports = {
    saveHistory,
    getHistory
}
