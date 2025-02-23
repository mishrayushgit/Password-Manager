import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passArray, setpassArray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpassArray(JSON.parse(passwords))
    }
  }, [])

  const ref = useRef();
  const passref = useRef();
  const copyText = (text) => {
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigator.clipboard.writeText(text)
  }
  const savePass = () => {
    setpassArray([...passArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passArray, form]))
    console.log([...passArray, form])
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const showPass = () => {
    // alert("showPass")
    if (ref.current.src.includes("public/hide.svg")) {
      ref.current.src = "public/show.svg"
      passref.current.type = "password"
    }
    else {
      ref.current.src = "public/hide.svg"
      passref.current.type = "text"
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className=" mycontainer bg-clip-content py-8">
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          <span className='text-green-500'>&lt;</span>
          Pass<span className='text-green-500'>G</span>har
          <span className='text-green-500'>/&gt;</span></h1>
        <p className='text-green-500 text-lg text-center'>Home to your Passwords</p>
        <div className='text-black flex flex-col p-4 gap-6 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-black  p-4 py-1 w-full' type="text" name='site' />
          <div className="flex w-full justify-between gap-3">

            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-black p-4 py-1 w-full' type="text" name='username' />

            <div className="relative">
              <input ref={passref} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-black  p-4 py-1 w-full' type="password" name='password' />
              <span onClick={showPass} className='absolute right-0.5 top-0.5 cursor-pointer'>
                <img className='p-1' ref={ref} width={30} src="public/show.svg" alt="" />
              </span>
            </div>

          </div>
          <button onClick={savePass} className='text-black flex justify-center items-center border border-black bg-green-500 hover:bg-green-400 hover:cursor-pointer w-fit rounded-full p-2 px-5'><lord-icon
            src="https://cdn.lordicon.com/sbnjyzil.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#000000">
          </lord-icon>Add Password</button>
        </div>
        <div className='font-bold text-2xl py-4'>
          Your Passwords
        </div>
        {passArray.length === 0 && <div>No passwords to show.</div>}
        {passArray.length != 0 &&
          <table className="table-auto w-full rounded-xl overflow-hidden">
            <thead className='text-white bg-gray-800'>
              <tr >
                <th className='py-2 border border-white'>Site</th>
                <th className='py-2 border border-white'>Username</th>
                <th className='py-2 border border-white'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-500/20'>
              {passArray.map((item, index) => {

                return <tr key={index}>
                  <td className='py-2 border border-white gap-1'>
                    <div className='flex items-center justify-center '>
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className='size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <img src="/public/copy.png" alt="" />
                      </div>
                    </div></td>
                  <td className='text-center  py-2 border border-white gap-1'>
                    <div className='flex items-center justify-center '>
                      <span>{item.username}</span><div className='size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <img src="/public/copy.png" alt="" />
                      </div>
                    </div></td>
                  <td className='text-center  py-2 border border-white flex items-center justify-center gap-1'>
                    <div className='flex items-center justify-center '>
                      <span>{item.password}</span><div className='size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <img src="/public/copy.png" alt="" />
                      </div>
                    </div>
                  </td>

                </tr>
              })}
            </tbody>
          </table>}

      </div>
    </>
  )
}

export default Manager