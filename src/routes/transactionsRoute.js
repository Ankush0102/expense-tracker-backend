import express from "express";
import { createTransaction, deleteTransaction, getUserTransactions, getUserTransactionsSummary } from "../controllers/transactionsController.js";

const router = express.Router()

router.get("/:userId", getUserTransactions)

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getUserTransactionsSummary)

export default router;

