import { dbConnect } from "../../../../utils/dbConnect"
import Condition from "../../../models/Condition";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const conditions = await Condition.find({});
            res.status(200).json({success: true, data: conditions});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const condition = await Condition.create(req.body);
            res.status(201).json({success: true, data: condition});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}