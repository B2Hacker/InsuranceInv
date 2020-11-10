import { dbConnect } from "../../../../utils/dbConnect";
import Item from "../../../models/Item";
import Room from "../../../models/Room";
import Location from "../../../models/Location";
import Category from "../../../models/Category";
import Contract from "../../../models/Contract";
import Company from "../../../models/Company";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const items = await Item
            .find({})
            .populate(["location", "room", "category", "condition", "purchaseInfo.company", "purchaseInfo.contract"])

            res.status(200).json({success: true, data: items});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const item = await Item.create(req.body);
            res.status(201).json({success: true, data: item});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}