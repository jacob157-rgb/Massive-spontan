function TextUnderline({ label, justify }) {
  return (
    <div className={`w-[68px] text-nowrap flex justify-${justify} border-b-[5px] border-secondary`}>
      <h1 className="text-2xl font-semibold">{label}</h1>
    </div>
  );
}

export default TextUnderline;
