import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Vui lòng nhập tiêu đề"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Vui lòng nhập số tiền"],
      min: [0, "Số tiền phải lớn hơn 0"],
    },
    category: {
      type: String,
      required: [true, "Vui lòng chọn danh mục"],
      enum: [
        "food",
        "transport",
        "shopping",
        "bills",
        "entertainment",
        "health",
        "education",
        "other",
      ],
      default: "other",
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Vui lòng chọn ngày"],
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
