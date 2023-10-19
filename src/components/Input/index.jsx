import { useState } from "react"


export default function index(props) {


  return (
    <div>
        <input
            type="text"
            placeholder="Search"
            value={props.value}
            onChange={props.onChange}
            className={props.className}
        />
    </div>
  )
}
