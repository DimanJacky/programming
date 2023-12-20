import Router from "express";
import ProductController from "./ProductController.js";

const router = new Router()

router.post('/v1/pp-delivery/issuance-np-card-in-tp/start', ProductController.nonPersoCardTpStart)
router.post('/v1/start', ProductController.start)
router.post('/v1/create', ProductController.create)

export default router;