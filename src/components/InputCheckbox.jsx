export default function InputCheckbox({ state, children }) {
  const [value, setValue] = state;
  return (
    <label className="input-checkbox">
      {/* what is the purpose of the label atrribute? And why it have the value "foo" -1 */}
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
