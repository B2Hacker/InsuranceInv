import dbConnect from '../../../../utils/dbConnect';
import Contact from '../../../models/Contact';

dbConnect();

export default async (req, res) => {
    const {query: {id}, method} = req;

switch (method) {
    case 'GET':
        try {
            const contact = await Contact.findById(id).populate("company");

            if (!contact) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: contact});

        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    case 'PUT':
        try {
            const contact = await Contact.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });
    
            if (!contact) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: contact});
    
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;

    case 'DELETE':
        try {
            const deletedContact = await Contact.deleteOne({_id: id});
        
            if (!deletedContact) {
                return res.status(400).json({success: false});
            }
            res.status(200).json({success: true, data: deletedContact});
        
        } catch (error) {
            return res.status(400).json({success: false, message: error.message});
        }
        break;
    
    default:
        res.status(400).json({success: false})
        break;
    }
}