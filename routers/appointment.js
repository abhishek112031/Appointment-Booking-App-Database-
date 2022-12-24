const express=require('express');
const path=require('path');
const router=express.Router();

const appointmentController=require('../controllers/appointment');


router.get('/',appointmentController.getBackend);
router.get('/book-appointment',appointmentController.getFrontpage);
router.post('/book-appointment',appointmentController.postAppointment);
router.delete('/:Id',appointmentController.deleteById);
router.get('/:Id',appointmentController.getById);



module.exports=router;