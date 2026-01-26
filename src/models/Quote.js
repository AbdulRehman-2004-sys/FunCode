import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  services: {
    type: [String],
    default: [],
  },
  budget: {
    type: String, // Changed to String to accommodate free text input
    required: [true, "Please provide a budget"],
  },
  currency: {
    type: String,
    required: [true, "Please select a currency"],
    enum: [
      "USD",
      "EUR",
      "SAR",
      "AED",
      "KWD",
      "PKR",
      "INR",
      "BDT",
      "GBP",
      "Other",
    ],
    default: "USD",
  },
  projectDetails: {
    type: String,
    required: [true, "Please provide project details"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
