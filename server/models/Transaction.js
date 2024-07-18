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
        required : true,
    },
    user: {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
})

const Transaction =model("Transaction", transactionSchema);

export default Transaction;