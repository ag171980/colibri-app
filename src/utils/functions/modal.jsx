export const showModal = (className) => {
  document.querySelector(className)?.classList.add("show-modal");
};

export const closeModal = (className) => {
  document.querySelector(className)?.classList.remove("show-modal");
};
