export default function Main() {
  return (
    <>
      <div className="w-80 h-full flex justify-center flex-col items-center">
        <div className="w-full flex flex-col">
          <p className="">e-mail</p>
          <input type="text" className="w-full min-w-44 border border-black" />
        </div>
        <div className="w-full flex flex-col">
          <p className=" mt-3">password</p>
          <input type="text" className=" min-w-44 border border-black" />
        </div>
        <div className="flex flex-col">
          <button className="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            sign up
          </button>
          <button className="mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            log in
          </button>
        </div>
      </div>
    </>
  );
}
