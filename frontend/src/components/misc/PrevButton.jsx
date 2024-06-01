function PrevButton({ carousel }) {
  return (
    <button
      className={`${carousel}-prev px-0.5 py-3 text-white bg-secondary hidden lg:flex items-center justify-center`}>
      <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
    </button>
  );
}

export default PrevButton;
