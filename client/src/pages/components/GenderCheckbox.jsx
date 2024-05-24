export default function GenderCheckbox({ setGender, gender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Male</span>
          <input
            checked={gender === "male"}
            onChange={() => setGender("male")}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Female</span>
          <input
            checked={gender === "female"}
            onChange={() => setGender("female")}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
}
