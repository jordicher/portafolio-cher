import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'


const FormContact = ({data}) => {

    const { register, errors, handleSubmit } = useForm();

    const submitForm = (e) => {
        console.log(e)
        axios({
            method: "post",
            url: 'https://formspree.io/f/mzbkwbln',
            data: e
        }).then(function (response) {
            console.log(response);
            toast('Se ha enviado el formulario!', {
                type: 'success',
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
            .catch(function () {
                toast('Error!, no se ha podido enviar', {
                    type: 'error',
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
        <div>
            <ToastContainer />     
           
            <form
                onSubmit={handleSubmit(submitForm)}>

                <div className="md:inline-flex space-y-4 md:space-y-0  w-full p-4 items-center">
                    <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                        <div>

                            <label className="text-sm md:text-lg">Email*</label>
                            <div className="w-full inline-flex border">
                                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                    <svg
                                        fill="none"
                                        className="w-6 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    name="emailForm"
                                    type="email"
                                    className={errors.emailForm ? "border-red-500 border-2 w-11/12 p-2" : "w-11/12 p-2"}
                                    placeholder="email@example.com"

                                    ref={
                                        register({
                                            required: {
                                                value: true
                                            }
                                        }
                                        )
                                    } />

                            </div>


                            <label className="text-sm md:text-lg">{data.name}*</label>
                            <div className="w-full inline-flex border">
                                <div className="w-1/12 pt-2 bg-gray-100 ">
                                    <svg
                                        fill="none"
                                        className="w-6  mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    name="nameForm"
                                    type="text"
                                    className={errors.nameForm ? "border-red-500 border-2 w-11/12 p-2" : "w-11/12 p-2 "}
                                    placeholder="Lucas Sanchez"

                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                minLength: 2,
                                                maxLength: 80,
                                            }
                                        }
                                        )
                                    } />
                            </div>

                        </div>

                        <span className="text-sm">*{data.fields}</span>
                    </div>

                </div>

                <div>
                    <div className="md:w-2/3 mx-auto max-w-sm">
                        <div>
                            <label className="text-sm md:text-lg text-black">{data.content}</label>
                            <div>

                                <textarea className="w-full border-purple-200 border rounded" rows="5" name="descripcion" ref={register}></textarea>

                            </div>


                        </div>

                        <button className="w-full mt-2 text-gray-700 inline-flex bg-green-300 hover:bg-green-100 hover:text-green-600 p-3 rounded text-2xl font-bold">
                            <svg
                                fill="none"
                                className="w-4 mr-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                                />
                            </svg>
                              {data.send}
                            </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormContact