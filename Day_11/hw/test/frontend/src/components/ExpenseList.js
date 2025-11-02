import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onEdit, onDelete, getCategoryLabel }) => {
  if (expenses.length === 0) {
    return (
      <div className="expense-list-empty">
        <p>Chưa có chi tiêu nào. Hãy thêm chi tiêu đầu tiên của bạn!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    const icons = {
      food: '🍔',
      transport: '🚗',
      shopping: '🛒',
      bills: '📄',
      entertainment: '🎬',
      health: '🏥',
      education: '📚',
      other: '📝'
    };
    return icons[category] || '📝';
  };

  return (
    <div className="expense-list">
      <h2>Danh Sách Chi Tiêu</h2>
      <div className="expense-grid">
        {expenses.map(expense => (
          <div key={expense._id} className="expense-card">
            <div className="expense-card-header">
              <div className="expense-icon">{getCategoryIcon(expense.category)}</div>
              <div className="expense-info">
                <h3>{expense.title}</h3>
                <span className="expense-category">{getCategoryLabel(expense.category)}</span>
              </div>
            </div>
            <div className="expense-amount">
              {expense.amount.toLocaleString('vi-VN')} đ
            </div>
            <div className="expense-date">
              {formatDate(expense.date)}
            </div>
            {expense.description && (
              <div className="expense-description">
                {expense.description}
              </div>
            )}
            <div className="expense-actions">
              <button
                onClick={() => onEdit(expense)}
                className="btn-edit"
              >
                Sửa
              </button>
              <button
                onClick={() => onDelete(expense._id)}
                className="btn-delete"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;

