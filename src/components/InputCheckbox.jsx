export default function InputCheckbox({ state, children }) {
    const [value, setValue] = state;
    return (
        <label>
            <input type="checkbox" checked={value} onChange={() => setValue(!value)} label="foo"/>
            {children}
        </label>
    )
}