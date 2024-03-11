import {mongoose, Schema} from "mongoose";

const testValueSchema = new Schema(
    {
        test_method: {
            type: String,
            // required: true,
        },
        test_parameter_id: {
            type: Number,
            // required: true,
        },
        parameter_name: {
            type: String,
            // required: true,
        },
        parameter_value: {
            type: String,
            // required: true,
        },
        is_highlighted: {
            type: Boolean,
            // required: true,
        },
        lower_bound: {
            type: String,
            // required: true,
        },
        display_value: {
            type: String,
            // required: true,
        },
        upper_bound: {
            type: String,
            // required: true,
        },
        impression: {
            type: String,
            // required: true,
        },
        unit:{
            type: String,
            // required: true,
        },
        other_male_id: {
            type: Number,
            // required: true,
        }
    }
)

const healthDataSchema = new Schema(
    {
        booking_id: {
            type: Number,
            required: true
        },
        customer_name: {
            type: String, 
            required: true,
        },
        collection_date: {
            type: String,
            required: true
        },
        booking_date: {
            type: String,
            required: true
        },
        lead_id: {
            type: Number,
            required: true
        },
        uhid: {
            type: Number,
            required: true,
        },
        useruuid:{
            type: String,
            required: true,
        },
        test_id: {
            type: Number,
            required: true
        },
        test_code: {
            type: String,
            required: true
        },
        test_name: {
            type: String,
            required: true
        },
        test_values: {
            type:[testValueSchema],
            // required: true,
        },
        __hevo_id:{
            type: String,
            required: true,
        },
        __hevo__ingested_at:{
            type: Number,
            required: true,
        },
        __hevo__loaded_at:{
            type: Number,
            required: true,
        },
        __hevo__marked_deleted:{
            type: Boolean,
            required: true,
        },
        __hevo__source_modified_at:{
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true
    }
)

export const HealthData = mongoose.model("HealthData", healthDataSchema);