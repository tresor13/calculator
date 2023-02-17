import * as mongoose from 'mongoose';

export const HistoryItem = new mongoose.Schema({
  expression: String,
  result: String,
});
