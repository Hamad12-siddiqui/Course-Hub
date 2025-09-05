"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PaymentModal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-[#0E2A46] mb-4">
          Checkout
        </h2>

        {/* Course Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-bold text-[#0E2A46]">{course.title}</h3>
            <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700 font-medium">Course Fee</p>
          <p className="font-bold text-lg text-[#704FE6]">${course.price}</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-3 mb-4">
          <button className="w-full py-2 px-4 bg-[#704FE6] text-white rounded-lg font-medium hover:bg-[#5a3fc2] transition">
            Pay with Card
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">
            Pay with PayPal
          </button>
        </div>

        {/* Guarantee */}
        <p className="text-xs text-gray-500 text-center">
          29-Day Money-Back Guarantee • Secure Payment
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentModal;
