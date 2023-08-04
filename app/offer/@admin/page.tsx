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
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Imagen del producto
              </label>
              <div className={"flex justify-center items-center w-full"}>
                <label
                  className={"rounded-lg flex flex-col justify-center items-center w-full h-64 border-2 border-dashed cursor-pointer hover:bg-gray-600 bg-gray-700 border-gray-600"}>
                  <div className={"pb-6 pt-5 justify-center items-center flex-col flex"}>
                    <CloudArrowUpIcon className="h-10 w-10 text-gray-400 mb-3 block align-middle"/>
                    <p className={"text-sm leading-5 mb-2 text-gray-400"}>
                      <span className={"font-semibold"}>
                        Click to upload
                      </span> or drag and drop
                    </p>
                    <p className={"mb-4 text-gray-400 text-xs leading-4"}>
                      Max. File Size: 1mb
                    </p>
                    <button
                      type={"button"}
                      className={"text-white bg-primary-600 font-medium text-xs leading-4 items-center px-3 py-2 rounded-lg focus:ring-primary-900 hover:bg-primary-800"}
                    >
                      Extra Small
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-primary-800">
            Añadir producto
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;

