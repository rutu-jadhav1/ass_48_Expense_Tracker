import User from "../models/User.js";
import Transaction from "./../models/Transaction.js"

const postTransaction = async (req, res) => {
    const { title, amount, category, type, user } = req.body;

    const transaction = new Transaction({
        title,amount, category, type, user 
    });

    try{
        const savedTransaction = await transaction.save();

        res.json({ 
            success : true,
            data : savedTransaction,
            message : `Transaction successful`
        })
    }
    catch(e){
        res.json({
            success : false,
            data : null,
            message : e.message,
        })
    }
}

const getTransactions = async (req, res) => {
    const {userId} = req.query

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success : false,
            data : null,
            message : `User not found`
        })
    }

    const transactions = await Transaction.find({user : userId}).sort({createdAt : -1});
    res.json({
        success : true,
        data : transactions,
        message : `Transaction fetched successfully`
    })
}

const deleteTransaction = async (req,res) => {
    const {id} = req.params;

    await Transaction.deleteOne({_id : id});

    res.json({
        success: true,
        message : `Transaction Deleted successfully`,
        data : null
    })
}
export { postTransaction, getTransactions, deleteTransaction }