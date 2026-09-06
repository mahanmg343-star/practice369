function Topright() {
  return (
    <>
      <section className="container-fluid">
        <section className="flex flex-wrap justify-end">
          <div className="flex relative gap-4 items-center mt-3 ">
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none
 focus:ring-[#4285F4]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-2 py-2 text-center
  inline-flex items-center dark:focus:ring-[#4285F4]/55"
            >
              <box-icon name="wallet"></box-icon>
              225$
            </button>
            <box-icon name="cloud-lightning"></box-icon>

            <box-icon type="solid" name="bell"></box-icon>

            <img
              className="rounded-full w-9 h-9"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10"
              alt="photo"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Topright;
