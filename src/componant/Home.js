import React, { useContext } from 'react'
import Notecontext from '../context/Notecontext'
// import Create_note from './Create_note';
import Note from './Note';

export default function Home() {
  const context = useContext(Notecontext);
  const { mynote } = context;
  return (
    <>

    <Note/>
    </>
  )
}
