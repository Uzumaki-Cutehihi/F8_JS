import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ expense, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'other',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense.title || '',
        amount: expense.amount || '',
        category: expense.category || 'other',
        description: expense.description || '',
        date: expense.date ? new Date(expense.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      });
    }
  }, [expense]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.amount || !formData.category) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    });
  };

  const categories = [
    { value: 'food', label: 'Ăn uống' },
    { value: 'transport', label: 'Giao thông' },
    { value: 'shopping', label: 'Mua sắm' },
    { value: 'bills', label: 'Hóa đơn' },
    { value: 'entertainment', label: 'Giải trí' },
    { value: 'health', label: 'Sức khỏe' },
    { value: 'education', label: 'Giáo dục' },
    { value: 'other', label: 'Khác' }
  ];

  return (
    <div className="expense-form-overlay">
      <div className="expense-form-card">
        <h3>{expense ? 'Chỉnh Sửa Chi Tiêu' : 'Thêm Chi Tiêu Mới'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tiêu đề *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Ví dụ: Mua đồ ăn"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Số tiền *</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="0"
              />
            </div>

            <div className="form-group">
              <label>Danh mục *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Ngày</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mô tả</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Thêm ghi chú (tùy chọn)"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Hủy
            </button>
            <button type="submit" className="btn-submit">
              {expense ? 'Cập nhật' : 'Thêm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;

