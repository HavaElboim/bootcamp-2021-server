const mongoose = require("mongoose");
// const User = require("./user");

const inquirySchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    inquiryTitle: {
      type: String,
      required: true,
    },
    inquiryContent: {
      type: String,
      required: true,
    },
    inquiryTags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],

    status: {
      type: String,
      enum: [
        "opened",
        "missingDetails",
        "matchesFound",
        "movedToExpert",
        "responseFromExpert",
        "meetingScheduled",
        "meetingWas",      
        "irrelevant"
      ],
    },
    irrelevantDetails: {
      cause: { type: String, enum: ["admin", "user", "expert"] },
      reason: String,
    },
    missingDetails: String,
    expertsFound: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    answersToExpertQuestions: [{ question: String, ans: String }],
    meetingOptions: {
      optionalDates: [Date],
      lengthMeeting: Number,
      preferredMeetingType: { type: String, enum: ["physically", "virtual"] },
      meetingAddress: String,
      scheduledDate:Date,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
