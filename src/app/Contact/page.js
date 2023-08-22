 
export default function Form() {
    return (
      <div className="my-10 m-auto lg:w-2/3 xl:w-1/3 bg-slate-800 shadow-2xl rounded-lg p-4 "> 
        <form action="" method=" ">

        <label htmlFor="first">First Name</label>
        <input className="rounded-sm ml-4 outline-none bg-slate-900 text-red-500 px-2 " type="text" id="first" name="first" required /><br/><br/>

        <label htmlFor="last">Last Name</label>
        <input className="rounded-sm ml-4 outline-none bg-slate-900 text-red-500 px-2 " type="text" id="last" name="last" required /><br/><br/>

        <label htmlFor="email">Email</label>
        <input className="rounded-sm ml-4 outline-none bg-slate-900 text-red-500 px-2 " type="email" id="email" name="email" required /><br/><br/>

        <label for="message">Enter your message:</label><br/><br/>
        <textarea className="rounded-sm outline-none bg-slate-900 text-red-500 px-2 " id="message" name="message" rows="4" cols="30"></textarea><br/><br/>

        <button className="bg-slate-700 px-4 py-1 rounded-lg hover:text-black hover:bg-transparent" type="submit">Submit</button>
        </form>
      </div>

    )
  }


