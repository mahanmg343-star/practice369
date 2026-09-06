function Leftsied() {
  return (
    <>
      <section className="container-fluid">
        <section className="flex flex-wrap ">
          <div
            id="drawer-navigation"
            className=" fixed bg-neutral-primary-soft w-25/100 h-screen border-e border-default"
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-15 w-15"
                alt="Flowbite Logo"
              />
              <p className="flex text-2xl">practice360</p>
            </div>

            <div className="flex flex-col">
              <input
                type="search"
                placeholder="Search..."
                className="rounded-md mt-2  "
              />

              <h6 className="flex mt-3 text-heading pl-3 ">MANAGEMENT</h6>

              <div className="py-5 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    >
                      <box-icon type="solid" name="dashboard"></box-icon>
                      <span className="ms-3">Dashboard</span>
                    </a>
                  </li>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="box"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Practice Management
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>
                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon
                      name="user-account"
                      type="solid"
                      color="#0060ff"
                    ></box-icon>
                    <span className="flex-1 ms-3 text-left text-blue-600 rtl:text-right whitespace-nowrap">
                      Practice Growth
                    </span>
                    <box-icon name="down-arrow-alt" color="#0060ff"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="line-chart" color="#0060ff"></box-icon>
                    <span className="flex-1 ms-3 text-left text-blue-600 rtl:text-right whitespace-nowrap">
                      Lead Assist
                    </span>
                    <box-icon name="down-arrow-alt" color="#0060ff"></box-icon>
                  </button>
                  <li>
                    <a
                      href="#"
                      className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                        Lead Management
                      </span>
                      <box-icon name="down-arrow-alt"></box-icon>
                    </button>

                    <ul id="dropdown-example" className="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                        >
                          Leads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                        >
                          Tags
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                        >
                          Lead source
                        </a>
                      </li>
                    </ul>
                  </li>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="microsoft-teams" type="logo"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Team Management
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon type="solid" name="vector"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Tools
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="user-voice"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Staff Management
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="comment-check"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Communications
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>
                  <h6 className="flex mt-3 text-heading pl-3 ">TOOLS</h6>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="notepad"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      billing
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="support"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Suppurt
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>

                  <button
                    type="button"
                    className="flex items-center w-full justify-between px-2 py-1.5 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <box-icon name="cog" type="solid"></box-icon>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Setting
                    </span>
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Leftsied;
