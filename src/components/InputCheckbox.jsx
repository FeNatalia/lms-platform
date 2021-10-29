export default function InputCheckbox({ state, children }) {
  const [value, setValue] = state;
  return (
    <label className="input-checkbox">
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
        label="foo"
      />
      {children}
    </label>
  );
}