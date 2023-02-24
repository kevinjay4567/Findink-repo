import { pool } from '../db.js';
import bcrypt from 'bcryptjs';

export const getCustomers = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM customer');
  res.json(rows);
};

export const createCustomer = async (req, res) => {
  const newCustomer = req.body;
  newCustomer.password = bcrypt.hashSync(newCustomer.password, 10);
  await pool.query('INSERT INTO customer set ?', [newCustomer]);
  res.json({ message: 'Customer created' });
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM customer WHERE id = ?', [
    id,
  ]);
  res.render('customers_edit', { customer: result[0] });
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  await pool.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id]);
  res.json({ message: 'Customer updated' });
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM customer WHERE id = ?', [id]);
  if (result[0].affectedRows === 1) {
    res.json({ message: 'Customer deleted' });
  } else {
    res.json({ message: 'Customer not found' });
  }
};
