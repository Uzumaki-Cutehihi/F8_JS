import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/expenses');
      if (response.data.success) {
        setExpenses(response.data.data);
      }
    } catch (error) {
      setError('Không thể tải danh sách chi tiêu');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingExpense(null);
    setShowForm(true);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa chi tiêu này?')) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      if (response.data.success) {
        setExpenses(expenses.filter(exp => exp._id !== id));
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Xóa thất bại');
    }
  };

  const handleFormSubmit = async (expenseData) => {
    try {
      if (editingExpense) {
        // Update
        const response = await axios.put(
          `http://localhost:5000/api/expenses/${editingExpense._id}`,
          expenseData
        );
        if (response.data.success) {
          setExpenses(expenses.map(exp => 
            exp._id === editingExpense._id ? response.data.data : exp
          ));
        }
      } else {
        // Create
        const response = await axios.post(
          'http://localhost:5000/api/expenses',
          expenseData
        );
        if (response.data.success) {
          setExpenses([response.data.data, ...expenses]);
        }
      }
      setShowForm(false);
      setEditingExpense(null);
    } catch (error) {
      alert(error.response?.data?.message || 'Thao tác thất bại');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingExpense(null);
  };

  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const getCategoryLabel = (category) => {
    const labels = {
      food: 'Ăn uống',
      transport: 'Giao thông',
      shopping: 'Mua sắm',
      bills: 'Hóa đơn',
      entertainment: 'Giải trí',
      health: 'Sức khỏe',
      education: 'Giáo dục',
      other: 'Khác'
    };
    return labels[category] || category;
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Quản Lý Chi Tiêu</h1>
          <div className="user-info">
            <span>Xin chào, {user?.name}</span>
            <button onClick={logout} className="btn-logout">Đăng xuất</button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        {error && <div className="error-banner">{error}</div>}
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Tổng Chi Tiêu</h3>
            <p className="stat-amount">{totalAmount.toLocaleString('vi-VN')} đ</p>
          </div>
          <div className="stat-card">
            <h3>Số Giao Dịch</h3>
            <p className="stat-count">{expenses.length}</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <button onClick={handleAdd} className="btn-add">
            + Thêm Chi Tiêu Mới
          </button>
        </div>

        {showForm && (
          <ExpenseForm
            expense={editingExpense}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        )}

        {loading ? (
          <div className="loading">Đang tải...</div>
        ) : (
          <ExpenseList
            expenses={expenses}
            onEdit={handleEdit}
            onDelete={handleDelete}
            getCategoryLabel={getCategoryLabel}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;

