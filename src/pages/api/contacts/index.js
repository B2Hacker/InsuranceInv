import { dbConnect } from "../../../../utils/dbConnect"
import Contact from "../../../models/Contact";

dbConnect();

export default async (req, res) => {
    const {method} = req;

switch (method) {
    case 'GET':
        try {
            const contacts = await Contact.find({}).populate("company");
            res.status(200).json({success: true, data: contacts});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'POST':
        try {
            const contact = await Contact.create(req.body);
            res.status(201).json({success: true, data: contact});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    default:
        res.status(400).json({success: false})
        break;
    }
}