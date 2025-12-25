import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  const isControlled = value !== undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-[10px] font-black uppercase text-slate-500">
          {label}
        </label>
      )}

      <input
        {...rest}
        value={value}
        onChange={onChange}
        readOnly={isControlled && !onChange}
        className={`border p-2 rounded-lg text-sm outline-none
        focus:border-[#0054a6] transition-all ${rest.className || ""}`}
      />
    </div>
  );
};

export default Input;
