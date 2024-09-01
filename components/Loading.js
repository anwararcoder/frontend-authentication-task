import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[6565665656565655] bg-white">
      <div className="bg-white flex items-center justify-center flex-col">
        <div className="w-16 h-16 border-4 border-t-transparent  border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="mt-4 text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
