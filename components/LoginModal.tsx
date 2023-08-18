"use client"
import {Fragment} from 'react';
import {useAppDispatch, useAppSelector} from "@/utils/hooks";
import {Dialog, Transition} from "@headlessui/react";
import {falseLoginModal} from "@/features/loginModal/loginModalSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {trueUser} from "@/features/user/userSlice";

const LoginModal = () => {
  const valueLoginModal = useAppSelector(state=>state.loginModal.value)
  const dispatch = useAppDispatch()
  return (
        <>
          <Transition
            appear
            show={valueLoginModal}
            as={Fragment}
          >
            <Dialog
              as={"div"}
              className={"relative z-10"}
              onClose={()=>dispatch(falseLoginModal())}
            >
              <Transition.Child
                as={Fragment}
                enter={"ease-out duration-300"}
                enterFrom={"opacity-0"}
                enterTo="opacity-100"
                leave={"ease-in duration-200"}
                leaveFrom={"opacity-100"}
                leaveTo={"opacity-0"}
              >
                <div className={"fixed inset-0 bg-black bg-opacity-25"}>
                </div>
              </Transition.Child>
              <div className={"fixed inset-0 overflow-y-auto"}>
                <div className={"flex min-h-full items-center justify-center p-4 text-center"}>
                  <Transition.Child
                    as={Fragment}
                    enter={"ease-out duration-300"}
                    enterFrom={"opacity-0 scale-95"}
                    enterTo="opacity-100 scale-100"
                    leave={"ease-in duration-200"}
                    leaveFrom={"opacity-100 scale-100"}
                    leaveTo={"opacity-0 scale-95"}
                  >
                    <Dialog.Panel
                      className={"relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-gray-900 p-6 text-left shadow-xl transition-all flex flex-col gap-5"}
                    >
                      <button
                        type={"button"}
                        onClick={()=>dispatch(falseLoginModal())}
                        className={"absolute top-2 right-2 z-10 w-fit p-2 rounded-full"}
                      >
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                      </button>
                          <form
                            className="p-4 mt-4"
                            // onSubmit={handleSubmit}
                          >
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                              </label>
                              <input
                                className="border text-sm rounded-lg block w-full py-2 px-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                // value={username}
                                // onChange={(event) => setUsername(event.target.value)}
                              />
                            </div>
                            <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                              </label>
                              <input
                                className="border text-sm rounded-lg block w-full placeholder-gray-400 text-white bg-gray-700 border-red-500 py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                // value={password}
                                // onChange={(event) => setPassword(event.target.value)}
                              />
                              <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={()=>dispatch(trueUser)}
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
    );
};

export default LoginModal;
