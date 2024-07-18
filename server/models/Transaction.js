import {Schema, model} from "mongoose"

//credit - money comes in
//debit - money go out

const transactionSchema = new Schema({
    amount : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        default : "Others",
    },
    type : {
        type : String,
        enum : ["debit", "credit"],
    },
    user: {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
},{
    timestamps : true
})

const Transaction =model("Transaction", transactionSchema);

export default Transaction;