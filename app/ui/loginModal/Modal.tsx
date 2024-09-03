'use client';

import Link from 'next/link';
import Login from './Login';
import Subscribe from './Subscribe';

export default function Modal() {
  return (
    <>
      <Link href={'#'} onClick={() => document.getElementById('my_modal_1').showModal()}>
        Login
      </Link>

      <dialog id="my_modal_1" className="modal h-auto">
        <div className="modal-box absolute right-0 top-0 rounded-l-box rounded-r-none flex flex-col items-center space-y-4 p-6">
          <Subscribe />
          {/* <div className="divider">OU</div> */}
          <Login />
        </div>
      </dialog>
    </>
  );
}
