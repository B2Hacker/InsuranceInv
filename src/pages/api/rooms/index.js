import dbConnect from "../../../../utils/dbConnect";
import Room from "../../../models/Room";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const rooms = await Room.find({}).populate("location");
            res.status(200).json({success: true, data: rooms});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const room = await Room.create(req.body);
            res.status(201).json({success: true, data: room});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}