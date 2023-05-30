import { Transaction } from '../../models/transactions.js';

export const listTransactions = async query => {
  const { page, limit } = query;
  return Transaction.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ transactionDate: 1 });
};
export const countTransaction = async () => {
  return Transaction.countDocuments();
};
export const filterTransaction = async query => {
  const { queryDate } = query;
  const date = queryDate.toString();
  return Transaction.find({ transactionDate: { $lte: date } }).sort({ transactionDate: 1 });
};
export const countFilteredTransaction = async query => {
  const { date } = query;
  return Transaction.find({ transactionDate: { $lte: date } }).countDocuments();
};
export const getTransactionById = transactionId => {
  return Transaction.findOne({ _id: transactionId });
};

export const addTransaction = ({
  typeOfTransaction,
  categoryId,
  amountOfTransaction,
  transactionDate,
  comment,
}) => {
  return Transaction.create({
    typeOfTransaction,
    categoryId,
    amountOfTransaction,
    transactionDate,
    comment,
  });
};

export const updateTransaction = (transactionId, body) => {
  return Transaction.findByIdAndUpdate({ _id: transactionId }, body, { new: true });
};

export const removeTransaction = transactionId => {
  return Transaction.findByIdAndRemove({ _id: transactionId });
};
