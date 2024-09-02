import toast from "react-hot-toast";

export const ShowErrors = (errors) => {
  Object.keys(errors).forEach((key) => {
    const messages = errors[key];

    if (Array.isArray(messages)) {
      messages.forEach((message) => toast.error(`${key}: ${message}`));
    } else {
      toast.error(`${key}: ${messages}`);
    }
  });
};
