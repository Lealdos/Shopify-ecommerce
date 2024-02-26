"use client";
import { useState } from "react";
// import { handleCreateUser } from "app/actions";

export const NewUserForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    // handleCreateUser(formData)
  }

  return (
    <div className=''  >
      <h1 className=''>New Account</h1>
      <form className='' onSubmit={handleSubmit}>
        <input className='' type="text" name="first_name" placeholder="Name" disabled={loading} />
        <input className='' type="text" name="last_name" placeholder="Lastname" disabled={loading} />
        <input className='' type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} />
        <input className='' type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
        <input className='' type="password" name="password" placeholder="password" disabled={loading} />
        <input className='' type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
        <input className='' type="submit" name="submit" value="Crear cuenta" disabled={loading} />
      </form>
      {errors.length > 0 && 
        <div>
          {errors.map((error, index) => {
            return <p key={index} className='' >{error}</p>
          })}
        </div>
      }
    </div>
  );
}