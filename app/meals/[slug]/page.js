import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    // stop executing and show the closest error or notFound page
    notFound();
  }
  const mealInstructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* dangerouslySetInnerHTML: to set output as HTML content
        BUT open yourself to cross-site scripting attack*/}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: mealInstructions }}
        ></p>
      </main>
    </>
  );
}
