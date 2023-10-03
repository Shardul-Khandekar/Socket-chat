import mongoose from "mongoose";

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    chatName: {
      type: String,
      required: True,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        // Get the User ID
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Display last message of each chat on the homepage of UI
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("Chat", chatSchema);
export default chat;
