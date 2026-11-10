"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "info" | "error";
  isOpen: boolean;
  onClose: () => void;
}

export function Toast({ message, type = "success", isOpen, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-white text-sm"
        >
          {type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {type === "info" && <Info className="w-5 h-5 text-sky-400 shrink-0" />}
          {type === "error" && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
          <span className="font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
