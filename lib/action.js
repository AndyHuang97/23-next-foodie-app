"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

// all functions will be treated as server actions
// server action: async + "use server" (from React)
// the server will receive the form data
export async function shareMeal(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);

  await saveMeal(meal);
  redirect("/meals")
}
