"use client"
import { type ReactNode, useState } from "react";
import { createPortal } from "react-dom";
// import { createIncrementalCompilerHost } from "typescript";

const Modal = ({
  // children,
  // buttonText,
  canCloseByClickingBackground = true,
}: {
  // children: ReactNode;
  // buttonText: string;
  canCloseByClickingBackground?: boolean;
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);

  if(!isOpened) {
    return (
      <button type="button" onClick={open} className="fixed bottom-10 right-12 w-24 h-24  bg-rose-500 text-3xl text-white font-semibold rounded-full hover:bg-rose-700">
        {/* {buttonText} */}
        ♥
      </button>
    );
  };

  const elmModal = (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full object-contain">
      <div className="relative border-8 border-rose-500 z-10 w-2/3 h-2/5 bg-white rounded-md will-change-transform will-change-opacity animate-appear">
        <button
          className="absolute top-0 right-0 p-0 text-[2.7rem] font-bold leading-3 text-black-300 cursor-pointer "
          type="button"
          aria-label="モーダルを閉じる"
          
          onClick={close}
          >
            ×
          </button>
          {/* {children} */}
          <textarea className="absolute top-10 border border-black w-2/3 h-2/3"/>
          <input 
          type="submit"
          value="post"
          className="absolute bottom-2 right-5 text-[20px] bg-rose-500 rounded px-4 py-1 hover:bg-rose-400 text-white"/>
      </div>
      {canCloseByClickingBackground && <div className="absolute top-0 left-0 w-full h-full bg-gray-500/50 z-0" onClick={close}/>}
    </div>
  );

  return createPortal(elmModal, document.body);
};

export default Modal;

// const Modal = ({children}: {children : ReactNode}) => {
//   return (
//     <div>
//       <div>
//         <button type="button" aria-label="モーダルを閉じる"> 
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// export default function Modal({children}: {children: ReactNode}) {
//     return(
//       <footer className="fixed bottom-10 right-12">
//         <button className="w-24 h-24  bg-rose-500 text-3xl text-white font-semibold rounded-full hover:bg-rose-700">♥</button>
//         {children}
//       </footer>  
//     );
//   }