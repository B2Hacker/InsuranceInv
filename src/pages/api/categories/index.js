import dbConnect from "../../../../utils/dbConnect";
import Category from "../../../models/Category";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const categories = await Category.find({});
            res.status(200).json({success: true, data: categories});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const category = await Category.create(req.body);
            res.status(201).json({success: true, data: category});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}