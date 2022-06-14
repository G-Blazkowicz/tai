const router = require('express').Router()
let Ticket = require('../models/ticket.model')
const asyncHandler = require('express-async-handler');
const Screening = require('../models/screening.model');

const getAllTickets = asyncHandler(async(req,res)=>{
    Ticket.find({
        ticketUser: req.user.id
    })
    .populate([
        {
            path: 'ticketUser'
        },
        {
            path: 'ticketScreeningID',
            populate: 'screeningMovie'
        }
    ])
    .then(tickets=>res.json(tickets))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const addTicket = asyncHandler(async(req,res)=>{
    
    const ticketScreeningID = req.body.ticketScreeningID

    const screening = await Screening.findById(ticketScreeningID)
    if (!screening){
        res.status(400).json('No screening exists with given ID')
    } 
    const ticketPrice = req.body.ticketPrice
    const ticketType = req.body.ticketType
    const ticketSeats = req.body.ticketSeats
    const ticketUser = req.user.id
    
    const existingTicket = await Ticket.find({ticketScreeningID:ticketScreeningID, ticketSeats: {"$in":ticketSeats}})
    if (existingTicket.length>0){
        console.log(existingTicket)
        res.status(400).json('Seats already taken')
    } else {

        const newTicket = new Ticket({
            ticketScreeningID,
            ticketPrice,
            ticketType,
            ticketSeats,
            ticketUser
        }
        )
        newTicket.save()
        .then(()=>res.status(200).json({
            message: "ticket added",
            user: req.user.id
        }))
    }
})




module.exports = {getAllTickets,addTicket}