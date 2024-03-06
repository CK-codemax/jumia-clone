'use client'

export default function ScrollToTop() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  //  <p className="hidden xl:flex bg-transparent px-4 h-[50px] items-center rounded-md border cursor-pointer border-white hover:text-[#f68b1e] hover:border-[#f68b1e]">female</p>
    

    return (
        <div className="w-full flex items-center justify-center">
            <button className="text-white w-[90%] sm:w-[400px] px-4 py-2 rounded bg-transparent border cursor-pointer border-white hover:text-[#f68b1e] hover:border-[#f68b1e]" onClick={handleClick}>
            Back to Top
        </button>
        </div>
    );
}
