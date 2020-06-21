const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// Pagina Home
router.get("/", (req, res) => {
   
                res.render("index");
           
    
});
router.post("/page1", (req, res) => {
    var index = req.body.index;
    res.render("page1",{index})
});
router.post("/page2", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    res.render("page2",{index:index, page1:page1})
});

router.post("/page3", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    var page2 = req.body.page2;
    res.render("page3", {index:index, page1:page1, page2:page2})
});
router.post("/page4", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    var page2 = req.body.page2;
    var page3 = req.body.page3;
    res.render("page4", {index:index, page1:page1, page2:page2, page3:page3})
});

// router.post("/compras/save", (req, res) => {    
//     if (req.body.produto != '') {       
//             var produto = req.body.produto;
//             var compra = req.body.compra;
//             var venda = req.body.venda;
//             var data = req.body.data;
//             var rastreio = req.body.rastreio;
//             var qt = req.body.qt;            
           
   
//                 res.render("teste", { produto,	
//                     compra,
//                     venda,
//                     data,
//                     rastreio,	
//                     qt});
         
        
//     } else {
//         res.redirect("/erro");
//     }


// });

// router.post("/compras/save", (req, res) => {    
//     if (req.body.produto != '') {       
//             var produto = req.body.produto;
//             var compra = req.body.compra;
//             var venda = req.body.venda;
//             var data = req.body.data;
//             var rastreio = req.body.rastreio;
//             var qt = req.body.qt;            
//             var status = req.body.status

//             Compras.create({
//                 produto,	
//                 compra,
//                 venda,
//                 data,
//                 rastreio,	
//                 qt	,
//                 status
//             }).then(() => {
//                 res.redirect("/");
//             });
        
//     } else {
//         res.redirect("/erro");
//     }


// });



// router.get("/compras", (req, res) => {
//     Entregas.findAll({       
//     }).then(entregas => {
//         res.render("relatorio", {
//             entrega: entregas,
//             relatorio: null
//         });
//     });
// });
// router.post("/pesquisar", (req, res) => {
//     var relatorio = req.body.relatorio; // salva o id
//     if (relatorio != undefined) {
//         Entregas.findAll({       
//         }).then(entregas => {
//             res.render("result", {
//                 entrega: entregas,
//                 relatorio
//             });
//         });
//     }
// });

module.exports = router;




/*
toLocaleString()
*/