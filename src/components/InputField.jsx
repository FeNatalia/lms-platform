// NPM packages
import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <label>
        <div>
            {label}
        </div>
      <input
        onChange={() => onChange(key, inputReference.current.value)}
        placeholder={placeholder}
        ref={inputReference}
        name={key}
        type={type}
        value={state}
        required={required}
      />
    </label>
  );
}