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

export { postTransaction }