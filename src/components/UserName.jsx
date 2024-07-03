export function UserName({ changeUsername }) {
  return (
    <div className="input-container">
      <input
        type="text"
        id="input"
        required=""
        onChange={(e) => {
          changeUsername(e.target.value);
        }}
      />
      <label htmlFor="input" className="label">
        Enter UserName
      </label>
      <div className="underline"></div>
    </div>
  );
}
