import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full md:w-[80%] m-2 mx-auto flex flex-col-reverse md:flex-row md:gap-3 items-center justify-between">
        <div className="w-full p-3 md:w-1/2 md:p-0">
          <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">NotesWala</h1>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Welcome to noteswala! Your one-stop destination for all your MCA study needs. Here, you will find comprehensive notes, helpful assignments, and important notifications to assist you in your academic journey at PGRRCDE, Osmania University. Dive in and enhance your learning experience with us!</p>
          <Link href={'/explore'}>
            <div href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Explore
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </Link>

        </div>
        <div className="wfull md:w-1/2">
          <Image width={600} src="./home.jpg" alt="" ></Image>
        </div>
      </div>
    </>
  );
}
