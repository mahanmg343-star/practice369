import { useState } from "react";
import EditableField from "./EditableField";

const Rightside = ({ initialTags = [] }) => {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");

  // --- Information section state ---
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    leadSource: "",
    agent: "",
    timezone: "",
  });
  const [infoDraft, setInfoDraft] = useState(info);

  const startEditingInfo = () => {
    setInfoDraft(info);
    setIsEditingInfo(true);
  };

  const saveInfo = () => {
    setInfo(infoDraft);
    setIsEditingInfo(false);
  };

  const cancelEditingInfo = () => {
    setInfoDraft(info);
    setIsEditingInfo(false);
  };

  const updateInfoField = (key, value) => {
    setInfoDraft((prev) => ({ ...prev, [key]: value }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <>
      <section className="container-fluid">
        <section className="flex flex-wrap  justify-end items-end ">
          <div className=" h-screen justify-end mr-5 ">
            {/* top */}
            <div className=" justify-center">
              <div className="flex flex-col items-center justify-center">
                <img
                  className=" rounded-full w-15 h-15 mt-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Zb-g9lvxmWyHJpZML_CWT8jA5GwtBBouxF7YQunMg&s=10"
                  alt=""
                />
                <p className=" items-center text-2xl">Tiffany May</p>
                <p className=" items-center">johnsmith@abc.com</p>
              </div>
              <div className="flex justify-center gap-3 mt-5">
                <button
                  type="button"
                  className="flex w-25 h-9 items-center justify-center text-fg-brand bg-neutral-primary border border-brand hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  <box-icon name="phone" color="#0056ff"></box-icon>Call
                </button>
                <button
                  type="button"
                  className="flex w-25 h-9 items-center justify-center text-fg-brand bg-neutral-primary border border-brand hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  <box-icon name="edit" color="#0056ff"></box-icon>Add Note
                </button>
              </div>
            </div>

            {/* profil */}
            <div className=" flex mt-6 gap-3">
              <p className="">Disposation:</p>
              <button
                type="button"
                className="flex text-body bg-neutral-secondary-medium box-border border border-default-medium
 hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium
  leading-5 rounded-full text-sm px-2 items-center justify-center focus:outline-none"
              >
                Converted
                <box-icon name="chevron-down" color="#0a0a0a"></box-icon>
              </button>
            </div>

            {/* tags */}
            <div className="flex items-center justify-between gap-3 mt-2">
              <p className="text-lg">Tags:</p>

              <section className="container-fluid">
                <section className="flex flex-wrap items-center justify-center">
                  <div className="w-25 flex items-center">
                    {/* نمایش تگ‌ها */}
                    <div className="flex flex-wrap gap-2 items-center justify-end">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {tag}
                          <button
                            onClick={() => removeTag(tag)}
                            className="hover:text-red-500 text-gray-400"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    {/* اینپوت + دکمه */}
                    <div className="flex items-center gap-2">
                      <input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTag()}
                        placeholder="add tag +"
                        className="flex border rounded-lg justify-center items-center w-20 h-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                      />
                    </div>
                  </div>
                </section>
              </section>
            </div>

            {/* informations */}
            <div>
              <div className="relative flex items-center justify-between mb-2 mt-3 min-h-8">
                <p className="text-heading font-medium justify-start">
                  Information
                </p>

                <div className="absolute top-0 right-0 flex gap-2">
                  {isEditingInfo ? (
                    <>
                      <button
                        type="button"
                        onClick={saveInfo}
                        className="text-xs text-white bg-brand hover:bg-brand/90 rounded-base px-3 py-1.5"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={cancelEditingInfo}
                        className="text-xs text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium rounded-base px-3 py-1.5"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={startEditingInfo}
                      className="flex justify-end items-center absolute right-0"
                    >
                      <box-icon
                        name="edit"
                        type="solid"
                        color="#484848"
                      ></box-icon>
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 w-full flex justify-end">
                <div className="bg-neutral-primary-soft border border-default rounded-base px-4">
                  <EditableField
                    label="First Name"
                    value={isEditingInfo ? infoDraft.firstName : info.firstName}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("firstName", v)}
                  />
                  <EditableField
                    label="Last Name"
                    value={isEditingInfo ? infoDraft.lastName : info.lastName}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("lastName", v)}
                  />
                  <EditableField
                    label="Phone Number"
                    value={isEditingInfo ? infoDraft.phone : info.phone}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("phone", v)}
                  />
                  <EditableField
                    label="Email"
                    value={isEditingInfo ? infoDraft.email : info.email}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("email", v)}
                  />
                  <EditableField
                    label="Lead Source"
                    value={
                      isEditingInfo ? infoDraft.leadSource : info.leadSource
                    }
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("leadSource", v)}
                  />
                  <EditableField
                    label="Agent"
                    value={isEditingInfo ? infoDraft.agent : info.agent}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("agent", v)}
                  />
                  <EditableField
                    label="Timezone"
                    value={isEditingInfo ? infoDraft.timezone : info.timezone}
                    editing={isEditingInfo}
                    onChange={(v) => updateInfoField("timezone", v)}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4
            focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-20 py-2.5 mt-3
            focus:outline-none"
            >
              + add a property
            </button>
          </div>
        </section>
      </section>
    </>
  );
};
export default Rightside;
