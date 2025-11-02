import express from 'express';
import Expense from '../models/Expense.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all expenses for logged in user
router.get('/', protect, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id })
      .sort({ date: -1 });

    res.json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server'
    });
  }
});

// Get single expense
router.get('/:id', protect, async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy chi tiêu'
      });
    }

    res.json({
      success: true,
      data: expense
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server'
    });
  }
});

// Create expense
router.post('/', protect, async (req, res) => {
  try {
    const { title, amount, category, description, date } = req.body;

    if (!title || !amount || !category) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ thông tin (tiêu đề, số tiền, danh mục)'
      });
    }

    const expense = await Expense.create({
      user: req.user.id,
      title,
      amount,
      category,
      description,
      date: date || new Date()
    });

    res.status(201).json({
      success: true,
      message: 'Thêm chi tiêu thành công',
      data: expense
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server'
    });
  }
});

// Update expense
router.put('/:id', protect, async (req, res) => {
  try {
    let expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy chi tiêu'
      });
    }

    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Cập nhật chi tiêu thành công',
      data: expense
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server'
    });
  }
});

// Delete expense
router.delete('/:id', protect, async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy chi tiêu'
      });
    }

    await Expense.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Xóa chi tiêu thành công',
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server'
    });
  }
});

export default router;

