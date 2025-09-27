import mongoose from "mongoose";

const clientDataSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
        },
        email: { 
            type: String, 
            unique: true
        },
        subject: {
            type: String,
            default: ""
        },
        message: {
            type: String,
            default: ""
        }
    }, { timestamps: true });



const ClientData = mongoose.model("clientData", clientDataSchema)

export default ClientData