import React from "react";
import {CloudArrowUpIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";

const Admin = () => {

  return (
    <section className="backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-xl font-bold text-white">Añadir nuevo producto</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white leading-6">
                Nombre del Producto
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Nombre del producto"
                // required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-white leading-6">
                Category
              </label>
              <select
                id="category"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                {/*// @ts-ignore*/}
                <option selected="">Selecciona Categoría</option>
                <option value="CC">Cocteles de la Casa</option>
                <option value="EC">Especialidades de Café</option>
                <option value="CO">Cocteles</option>
                <option value="BE">Bebidas</option>
                <option value="DU">Dulces</option>
                <option value="EL">Elaborados</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-white leading-6">
                Precio
              </label>
              <div className={"relative"}>
                <div className={"absolute items-center pl-3 flex left-0 bottom-0 top-0 pointer-events-none"}>
                  <CurrencyDollarIcon className={"w-6 h-6 text-gray-400 block align-middle"}/>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="pl-9 border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="400"
                  // required=""
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-white leading-6">
                Descripción
              </label>
              <textarea
                id="description"
                // @ts-ignore
                rows="8"
                className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tu descripción aquí">

              </textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
                Imagen del producto
              </label>
              <div className="group mt-2 flex justify-center rounded-lg border border-dashed border-gray-600 px-6 py-10 bg-gray-700 hover:bg-gray-600">
                <div className="text-center">
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                  <div className="mt-4 flex text-sm leading-6 text-gray-300">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-gray-700 font-semibold text-indigo-400 group-hover:bg-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 1MB</p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg focus:ring-4 focus:ring-indigo-900 hover:bg-indigo-700">
            Añadir producto
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;

