import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: [true, "video file must be required"],
    },

    description: {
      type: String,
      required: [true, "description must be required"],
    },
    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    videoUploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    duration: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: [true, "title must be required"],
    },
    thumbnail: {
      type: String,
      required: [true, "thumbnail must be required"],
    },
  },
  { timestamps: true }
);

// plugin hook
videoSchema.plugin(mongooseAggregatePaginate);
export const video = mongoose.model("video", videoSchema);
