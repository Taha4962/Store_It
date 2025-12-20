import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-center flex-col h-screen">
      <h1 className="h1 text-brand-100 ">
        StoreIt - The only storage solution you need.
      </h1>
      {/* <button className="flex mt-10 bg-brand-100 p-5 rounded-xl px-10" onClick={() => = '/sign-up' }}>
        Sign Up
      </button> */}
    </div>
  );
}
