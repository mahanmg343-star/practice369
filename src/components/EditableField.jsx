const EditableField = ({ label, value, editing, onChange }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-default-medium last:border-b-0">
      <span className="text-sm text-gray-500">{label}</span>

      {editing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-right border border-brand rounded-md px-2 py-1 w-40 focus:outline-none focus:ring-2 focus:ring-brand-subtle"
        />
      ) : (
        <span className="text-sm text-heading">{value || "-"}</span>
      )}
    </div>
  );
};

export default EditableField;
