import { dbConnect } from "../../../../utils/dbConnect"
import Contract from '../../../models/Contract';

dbConnect();

export default async (req, res) => {
    const {query: {id}, method} = req;

switch (method) {
    case 'GET':
        try {
            const contract = await Contract
            .findById(id)
            .populate(["company", "contact"])

            if (!contract) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: contract});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'PUT':
        try {
            const contract = await Contract.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });
    
            if (!contract) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: contract});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    case 'DELETE':
        try {
            const deletedContract = await Contract.deleteOne({_id: id});
        
            if (!deletedContract) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: deletedContract});
        
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    default:
        res.status(400).json({success: false})
        break;
    }
}