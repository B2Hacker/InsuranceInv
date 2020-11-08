import { dbConnect } from "../../../../utils/dbConnect"
import SubCategory from "../../../models/SubCategory";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const subcategories = await SubCategory.find({});
            res.status(200).json({success: true, data: subcategories});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const subcategory = await SubCategory.create(req.body);
            res.status(201).json({success: true, data: subcategory});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}