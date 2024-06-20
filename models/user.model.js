import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        
    },
    emailAddress: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:["household", "waste-collector", "administrator"],
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    otpExpires: {
        type: Date,
        required: false,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
        }
    },
    timestamps: true,
});

const User = model('User', UserSchema);

export default User;