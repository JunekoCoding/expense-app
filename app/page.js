"use client";

import Image from "next/image";
import AddItem from "../components/add-item.js";

export default function Home() {
  return (
    <div>
      <h1>NextJS Firebase Firestore</h1>
      <AddItem />
    </div>
  );
}
