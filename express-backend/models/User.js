//import mongoose from "mongoose";

const mongoose = new require("mongoose");

let Schema = mongoose.Schema;

let goalsSchema = new Schema(
    {
        description: String,
        status: String,
        completeDate: {type: Date, default: undefined}
    }
);

let userSchema = new Schema(
    {
        username: String,
        firstName: String,
        lastName: String,
        curWeight: Number,
        curHeight: Number,
        birthday: Date,
        age: {type: Number, default: (Date.now)},
        gender: String,
        activity: String,
        personalGoals: [
            {
                description: String,
                status: String,
                completeDate: {type: Date, default: undefined}
            }
        ],
        dailyInfo: [
            {
                date: Date,
                weight: Number,
                height: Number,
                totalCal: Number,
                totalCarb: Number,
                totalProt: Number,
                totalFat: Number,
                food: [
                    {
                        foodName: String,
                        foodCal: Number,
                        quantity: Number,
                        servingType: String,
                        meal: String,
                        carbs: Number,
                        prot: Number,
                        fat: Number,
                    }
                ],
                exercise: {
                    information: String,
                    time: Number,
                    calBurned: Number,
                    intensity: String
                },
                journalEntry: {
                    entry: String,
                    score: Number
                }
            }
        ]
    },
    {timestamps: true}
);

let User = mongoose.model("user", userSchema);

module.exports = User;